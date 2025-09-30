<?php

declare(strict_types=1);

namespace In2code\In2TipTap\Editor;

use In2code\In2TipTap\Exception\MissingEditorConfigurationException;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\PathUtility;

class ConfigurationService
{
    /**
     * @throws MissingEditorConfigurationException
     */
    public function getConfiguration(array $fieldConfiguration): array
    {
        $editorConfiguration = $fieldConfiguration['richtextConfiguration']['editor']['tiptap']['config'] ??
            throw new MissingEditorConfigurationException(
            'Missing editor configuration for tiptap',
            1755159351
        );

        $editorConfiguration['contentCss'] = $this->resolveStylePaths($editorConfiguration['contentCss'] ?? []);
        return $editorConfiguration;
    }

    public function isDragAndDropEnabled(array $editorConfiguration): bool
    {
        return boolval($editorConfiguration['enableContentDragAndDrop'] ?? true);
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
