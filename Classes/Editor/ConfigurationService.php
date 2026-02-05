<?php

declare(strict_types=1);

namespace In2code\Typo3TipTap\Editor;

use TYPO3\CMS\Backend\Richtext\RichtextEditorConfiguration;
use TYPO3\CMS\Core\Cache\CacheManager;
use TYPO3\CMS\Core\Configuration\Loader\YamlFileLoader;
use TYPO3\CMS\Core\Utility\ArrayUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\PathUtility;

class ConfigurationService
{
    public function getConfiguration(string $presetName, RichtextEditorConfiguration $rteConfig = null): array
    {
        $runtimeCache = GeneralUtility::makeInstance(CacheManager::class)->getCache('runtime');
        $identifier = 'richtext_' . $presetName;
        $configuration = $runtimeCache->get($identifier);
        $presetName = isset($GLOBALS['TYPO3_CONF_VARS']['RTE']['tiptap']['Presets'][$presetName]) ? $presetName : 'default';

        if ($configuration === false) {
            $fileLoader = GeneralUtility::makeInstance(YamlFileLoader::class);
            $configuration = $fileLoader->load($GLOBALS['TYPO3_CONF_VARS']['RTE']['tiptap']['Presets'][$presetName]);
            if (is_array($configuration['processing'] ?? null)) {
                $configuration['proc.'] = ArrayUtility::convertPlainArrayToTypoScriptArray($configuration['processing']);
            }
            $runtimeCache->set($identifier, $configuration);
        }

        $configuration = $configuration['editor']['tiptap']['config'] ?? [];
        $configuration['contentCss'] = $this->resolveStylePaths($configuration['contentCss'] ?? []);
        if ($rteConfig !== null) {
            $configuration['linkBrowserUrl'] = $rteConfig->additionalOptions['linkBrowserUrl'] ?? '';
        }

        return $configuration;
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
