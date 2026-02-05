<?php

declare(strict_types=1);

namespace In2code\Typo3TipTap\Richtext;

use In2code\Typo3TipTap\Editor\ConfigurationService;
use TYPO3\CMS\Backend\Attribute\AsRichtextEditorBuilder;
use TYPO3\CMS\Backend\Richtext\RichtextEditorBuilderInterface;
use TYPO3\CMS\Backend\Richtext\RichtextEditorConfiguration;
use TYPO3\CMS\Backend\Richtext\RichtextEditorDefinition;
use TYPO3\CMS\Core\Page\JavaScriptModuleInstruction;
use TYPO3\CMS\Core\Utility\GeneralUtility;

#[AsRichtextEditorBuilder('tiptap')]
class TipTapEditorBuilder implements RichtextEditorBuilderInterface
{
    public function __construct(protected readonly ConfigurationService $configurationService)
    {
    }

    public function buildDefinition(string $presetName, RichtextEditorConfiguration $configuration): RichtextEditorDefinition
    {
        return new RichtextEditorDefinition(
            html: $this->buildHtml($presetName, $configuration),
            javascriptModules: [
                JavaScriptModuleInstruction::create('@typo3-tiptap/tiptap/index.js')
            ],
            stylesheetFiles: [],
            placeholderLabel: 'Custom Editor',
            placeholderHtml: '<div>Loading editor...</div>'
        );
    }

    public function getConfiguration(string $presetName): array
    {
        return $this->configurationService->getConfiguration($presetName);
    }

    public function getLinkBrowserModule(): ?JavaScriptModuleInstruction
    {
        return JavaScriptModuleInstruction::create('@typo3/rte-ckeditor/rte-link-browser.js');
    }

    protected function buildHtml(string $presetName, RichtextEditorConfiguration $configuration): string
    {
        $editorOptions = $this->configurationService->getConfiguration($presetName, $configuration);
        $editorOptions['id'] = htmlspecialchars($configuration->name);

        $textareaAttributes = GeneralUtility::implodeAttributes([
            'id' => $editorOptions['id'],
            'name' => $editorOptions['id'],
            'rows' => '18',
            'class' => 'form-control t3js-formengine-input',
            'style' => 'display:none;'
        ], true);

        $editorAttributes = GeneralUtility::implodeAttributes([
            'options' => GeneralUtility::jsonEncodeForHtmlAttribute($editorOptions, false)
        ], true);

        $html = [];
        $html[] =           '<editor-tiptap ' . $editorAttributes . '>';
        $html[] =                 '<textarea ' . $textareaAttributes . '>';
        $html[] =                   htmlspecialchars($configuration->value);
        $html[] =                 '</textarea>';
        $html[] =           '</editor-tiptap>';
        return implode(LF, $html);
    }
}
