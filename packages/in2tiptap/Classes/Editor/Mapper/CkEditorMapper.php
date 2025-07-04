<?php

namespace In2code\In2TipTap\Editor\Mapper;

use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\EventDispatcher\EventDispatcher;
use TYPO3\CMS\RteCKEditor\Form\Element\Event\AfterGetExternalPluginsEvent;
use TYPO3\CMS\RteCKEditor\Form\Element\Event\AfterPrepareConfigurationForEditorEvent;
use TYPO3\CMS\RteCKEditor\Form\Element\Event\BeforeGetExternalPluginsEvent;
use TYPO3\CMS\RteCKEditor\Form\Element\Event\BeforePrepareConfigurationForEditorEvent;

class CkEditorMapper implements MapperInterface
{
    use IsNeededTrait;

    public const string EDITOR_NAME = 'ckeditor';

    public function __construct(private readonly EventDispatcher $eventDispatcher)
    {
    }

    public function resolveConfiguration(array $data): array
    {
        $configuration = $this->prepareConfigurationForEditor();

        foreach ($this->getExtraPlugins($data) as $extraPluginName => $extraPluginConfig) {
            $configName = $extraPluginConfig['configName'] ?? $extraPluginName;
            if (!empty($extraPluginConfig['config']) && is_array($extraPluginConfig['config'])) {
                if (empty($configuration[$configName])) {
                    $configuration[$configName] = $extraPluginConfig['config'];
                } elseif (is_array($configuration[$configName])) {
                    $configuration[$configName] = array_replace_recursive($extraPluginConfig['config'], $configuration[$configName]);
                }
            }
        }
        if (isset($data['parameterArray']['fieldConf']['config']['placeholder'])) {
            $configuration['placeholder'] = (string)$data['parameterArray']['fieldConf']['config']['placeholder'];
        }
        return $configuration;
    }

    /**
     * Get configuration of external/additional plugins
     */
    protected function getExtraPlugins(array $data): array
    {
        $externalPlugins = $this->rteConfiguration['externalPlugins'] ?? [];
        $externalPlugins = $this->eventDispatcher
            ->dispatch(new BeforeGetExternalPluginsEvent($externalPlugins, $data))
            ->getConfiguration();

        $urlParameters = [
            'P' => [
                'table' => $data['tableName'],
                'uid' => $data['databaseRow']['uid'],
                'fieldName' => $data['fieldName'],
                'recordType' => $data['recordTypeValue'],
                'pid' => $data['effectivePid'],
                'richtextConfigurationName' => $data['parameterArray']['fieldConf']['config']['richtextConfigurationName'],
            ],
        ];

        $pluginConfiguration = [];
        foreach ($externalPlugins as $pluginName => $configuration) {
            $pluginConfiguration[$pluginName] = [
                'configName' => $configuration['configName'] ?? $pluginName,
            ];
            unset($configuration['configName']);
            // CKEditor4 style config, unused in CKEditor5 and not forwarded to the resutling plugin config
            unset($configuration['resource']);

            if ($configuration['route'] ?? null) {
                $configuration['routeUrl'] = (string)$this->uriBuilder->buildUriFromRoute($configuration['route'], $urlParameters);
            }

            $pluginConfiguration[$pluginName]['config'] = $configuration;
        }

        $pluginConfiguration = $this->eventDispatcher
            ->dispatch(new AfterGetExternalPluginsEvent($pluginConfiguration, $data))
            ->getConfiguration();
        return $pluginConfiguration;
    }

    /**
     * Compiles the configuration set from the outside
     * to have it easily injected into the CKEditor.
     *
     * @return array the configuration
     */
    protected function prepareConfigurationForEditor(): array
    {
        // Ensure custom config is empty so nothing additional is loaded
        // Of course this can be overridden by the editor configuration below
        $configuration = [
            'customConfig' => '',
            'label' => $this->data['parameterArray']['fieldConf']['label'] ?? '',
        ];

        if ($this->data['parameterArray']['fieldConf']['config']['readOnly'] ?? false) {
            $configuration['readOnly'] = true;
        }

        if (is_array($this->rteConfiguration['config'] ?? null)) {
            $configuration = array_replace_recursive($configuration, $this->rteConfiguration['config']);
        }

        $configuration = $this->eventDispatcher
            ->dispatch(new BeforePrepareConfigurationForEditorEvent($configuration, $this->data))
            ->getConfiguration();

        // Set the UI language of the editor if not hard-coded by the existing configuration
        if (empty($configuration['language']) ||
            (is_array($configuration['language']) && empty($configuration['language']['ui']))
        ) {
            $userLang = (string)($this->getBackendUser()->user['lang'] ?: 'en');
            $configuration['language']['ui'] = $userLang === 'default' ? 'en' : $userLang;
        } elseif (!is_array($configuration['language'])) {
            $configuration['language'] = [
                'ui' => $configuration['language'],
            ];
        }
        $configuration['language']['content'] = $this->getLanguageIsoCodeOfContent();

        // Replace all label references
        $configuration = $this->replaceLanguageFileReferences($configuration);
        // Replace all paths
        $configuration = $this->replaceAbsolutePathsToRelativeResourcesPath($configuration);

        // unless explicitly set, the debug mode is enabled in development context
        if (!isset($configuration['debug'])) {
            $configuration['debug'] = ($GLOBALS['TYPO3_CONF_VARS']['BE']['debug'] ?? false) && Environment::getContext()->isDevelopment();
        }

        $configuration = $this->eventDispatcher
            ->dispatch(new AfterPrepareConfigurationForEditorEvent($configuration, $this->data))
            ->getConfiguration();

        return $configuration;
    }
}
