<?php

declare(strict_types=1);

namespace In2code\In2TipTap\Form\Element;

use In2code\In2TipTap\Exception\MissingEditorConfigurationException;
use TYPO3\CMS\Backend\Form\Element\AbstractFormElement;
use TYPO3\CMS\Backend\Routing\UriBuilder;
use TYPO3\CMS\Core\Page\JavaScriptModuleInstruction;
use TYPO3\CMS\Core\Utility\GeneralUtility;

class TipTapTextElement extends AbstractFormElement
{
    /**
     * @var array
     */
    protected $defaultFieldInformation = [
        'tcaDescription' => [
            'renderType' => 'tcaDescription',
        ],
    ];

    /**
     * @var array
     */
    protected $defaultFieldWizard = [
        'localizationStateSelector' => [
            'renderType' => 'localizationStateSelector',
        ],
        'otherLanguageContent' => [
            'renderType' => 'otherLanguageContent',
            'after' => [
                'localizationStateSelector',
            ],
        ],
        'defaultLanguageDifferences' => [
            'renderType' => 'defaultLanguageDifferences',
            'after' => [
                'otherLanguageContent',
            ],
        ],
    ];

    /**
     * Renders the ckeditor element
     *
     * @throws \InvalidArgumentException
     */
    public function render(): array
    {
        $resultArray = $this->initializeResultArray();
        $parameterArray = $this->data['parameterArray'];
        $config = $parameterArray['fieldConf']['config'];

        $fieldId = $this->sanitizeFieldId($parameterArray['itemFormElName']);
        $itemFormElementName = $this->data['parameterArray']['itemFormElName'];

        $value = $this->data['parameterArray']['itemFormElValue'] ?? '';

        $fieldInformationResult = $this->renderFieldInformation();
        $fieldInformationHtml = $fieldInformationResult['html'];
        $resultArray = $this->mergeChildReturnIntoExistingResult($resultArray, $fieldInformationResult, false);

        $fieldControlResult = $this->renderFieldControl();
        $fieldControlHtml = $fieldControlResult['html'];
        $resultArray = $this->mergeChildReturnIntoExistingResult($resultArray, $fieldControlResult, false);

        $fieldWizardResult = $this->renderFieldWizard();
        $fieldWizardHtml = $fieldWizardResult['html'];
        $resultArray = $this->mergeChildReturnIntoExistingResult($resultArray, $fieldWizardResult, false);

        $editorConfiguration = $config['richtextConfiguration']['editor']['tiptap']['config'] ??
            throw new MissingEditorConfigurationException(
                'Missing editor configuration for tiptap',
                1755159351
            );

        // @todo make this configurable
        $urlParameters = [
            'P' => [
                'table'      => $this->data['tableName'],
                'uid'        => $this->data['databaseRow']['uid'],
                'fieldName'  => $this->data['fieldName'],
                'recordType' => $this->data['recordTypeValue'],
                'pid'        => $this->data['effectivePid'],
            ],
        ];

        $uriBuilder = GeneralUtility::makeInstance(UriBuilder::class);
        $linkBrowserRoute = (string)$uriBuilder->buildUriFromRoute('in2tiptap_wizard_browse_links', $urlParameters);
        // END todo

        $editorAttributes = GeneralUtility::implodeAttributes([
            'id' => $fieldId . 'tiptap',
            'plugins' => GeneralUtility::jsonEncodeForHtmlAttribute($editorConfiguration['plugins'] ?? [], false),
            'enable-content-drag-and-drop' => 'true',
            'data-link-browser-url' => $linkBrowserRoute,
        ], true);

        $textareaAttributes = GeneralUtility::implodeAttributes([
            'id' => $fieldId,
            'name' => $itemFormElementName,
            'rows' => '18',
            'class' => 'form-control',
            'data-formengine-validation-rules' => $this->getValidationDataAsJsonString($config),
        ], true);

        $html = [];
        $html[] = '<div class="formengine-field-item t3js-formengine-field-item">';
        $html[] =   $fieldInformationHtml;
        $html[] =   '<div class="form-control-wrap">';
        $html[] =       '<div class="form-wizards-wrap">';
        $html[] =           '<div class="form-wizards-item-element">';
        $html[] =           '<editor-tiptap ' . $editorAttributes . '>';
        $html[] =                 '<textarea ' . $textareaAttributes . '>';
        $html[] =                   htmlspecialchars($value);
        $html[] =                 '</textarea>';
        $html[] =           '</editor-tiptap>';
        $html[] =           '</div>';
        if (!empty($fieldControlHtml)) {
            $html[] =           '<div class="form-wizards-item-aside form-wizards-item-aside--field-control">';
            $html[] =               '<div class="btn-group">';
            $html[] =                   $fieldControlHtml;
            $html[] =               '</div>';
            $html[] =           '</div>';
        }
        if (!empty($fieldWizardHtml)) {
            $html[] = '<div class="form-wizards-item-bottom">';
            $html[] = $fieldWizardHtml;
            $html[] = '</div>';
        }
        $html[] =       '</div>';
        $html[] =   '</div>';
        $html[] = '</div>';

        $resultArray['html'] = $this->wrapWithFieldsetAndLegend(implode(LF, $html));
        $resultArray['javaScriptModules'][] = JavaScriptModuleInstruction::create('@in2tiptap/tiptap/index.js');
        $resultArray['stylesheetFiles'][] = 'EXT:in2tiptap/Resources/Public/TipTap/index.css';

        return $resultArray;
    }


    protected function sanitizeFieldId(string $itemFormElementName): string
    {
        $fieldId = (string)preg_replace('/[^a-zA-Z0-9_:-]/', '_', $itemFormElementName);
        return htmlspecialchars((string)preg_replace('/^[^a-zA-Z]/', 'x', $fieldId));
    }
}
