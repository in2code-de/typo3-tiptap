<?php

declare(strict_types=1);

namespace In2code\Typo3TipTap\Editor;

use TYPO3\CMS\Backend\Routing\UriBuilder;
use TYPO3\CMS\Core\Cache\CacheManager;
use TYPO3\CMS\Core\Configuration\Loader\YamlFileLoader;
use TYPO3\CMS\Core\Utility\ArrayUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\PathUtility;

class ConfigurationService
{
    public function getConfiguration(string $presetName, array $elementData = []): array
    {
        $runtimeCache = GeneralUtility::makeInstance(CacheManager::class)->getCache('runtime');
        $identifier = 'richtext_' . $presetName;
        $configuration = $runtimeCache->get($identifier);

        if ($configuration === false) {
            $fileLoader = GeneralUtility::makeInstance(YamlFileLoader::class);
            $configuration = $fileLoader->load($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets'][$presetName]);
            if (is_array($configuration['processing'] ?? null)) {
                $configuration['proc.'] = ArrayUtility::convertPlainArrayToTypoScriptArray($configuration['processing']);
            }

            $configuration = $configuration['editor']['tiptap']['config'] ?? [];
            $configuration['contentCss'] = $this->resolveStylePaths($configuration['contentCss'] ?? []);
            $configuration['linkBrowserUrl'] = $this->getWizardUrl($elementData, $presetName);
            $runtimeCache->set($identifier, $configuration);
        }

        return $configuration;
    }

    protected function getWizardUrl(array $data, string $presetName): string
    {
        // @todo make this configurable
        $urlParameters = [
            'P' => [
                'table' => $data['tableName'],
                'uid' => $data['databaseRow']['uid'],
                'fieldName' => $data['fieldName'],
                'recordType' => $data['recordTypeValue'],
                'pid' => $data['effectivePid'],
                'richtextConfigurationName' => $presetName,
                'richtextEditor' => 'tiptap',
            ],
        ];

        $uriBuilder = GeneralUtility::makeInstance(UriBuilder::class);
        return (string)$uriBuilder->buildUriFromRoute('rteckeditor_wizard_browse_links', $urlParameters);
        // END todo
    }

    protected function resolveStylePaths(array $styles): array
    {
        $resolvedStyles = [];

        foreach ($styles as $style) {
            if (is_string($style) === false) {
                continue;
            }

            $resolvedStyles[] = PathUtility::getAbsoluteWebPath(GeneralUtility::getFileAbsFileName($style));
        }

        return $resolvedStyles;
    }
}
