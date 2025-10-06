<?php

declare(strict_types=1);

namespace In2code\Typo3TipTap\Editor;

use In2code\Typo3TipTap\Exception\MissingEditorConfigurationException;
use TYPO3\CMS\Backend\Routing\UriBuilder;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\PathUtility;

class ConfigurationService
{
    /**
     * @throws MissingEditorConfigurationException
     */
    public function getConfiguration(array $fieldConfiguration, array $elementData): array
    {
        $editorConfiguration = $fieldConfiguration['richtextConfiguration']['editor']['tiptap']['config'] ??
            throw new MissingEditorConfigurationException(
                'Missing editor configuration for tiptap',
                1755159351
            );

        $editorConfiguration['contentCss'] = $this->resolveStylePaths($editorConfiguration['contentCss'] ?? []);
        $editorConfiguration['linkBrowserUrl'] = $this->getWizardUrl($elementData);
        return $editorConfiguration;
    }

    protected function getWizardUrl(array $data): string
    {
        // @todo make this configurable
        $urlParameters = [
            'P' => [
                'table' => $data['tableName'],
                'uid' => $data['databaseRow']['uid'],
                'fieldName' => $data['fieldName'],
                'recordType' => $data['recordTypeValue'],
                'pid' => $data['effectivePid'],
            ],
        ];

        $uriBuilder = GeneralUtility::makeInstance(UriBuilder::class);
        return (string)$uriBuilder->buildUriFromRoute('typo3-tiptap_wizard_browse_links', $urlParameters);
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
