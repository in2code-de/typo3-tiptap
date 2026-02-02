<?php

declare(strict_types=1);

namespace In2code\Typo3TipTap\Form;

use In2code\Typo3TipTap\Editor\ConfigurationService;
use TYPO3\CMS\Backend\Attribute\AsRichtextEditorBuilder;
use TYPO3\CMS\Backend\Form\Richtext\RichtextEditorBuilderInterface;
use TYPO3\CMS\Backend\Form\Richtext\RichtextEditorDefinition;
use TYPO3\CMS\Core\Page\JavaScriptModuleInstruction;
use TYPO3\CMS\Core\Utility\GeneralUtility;

#[AsRichtextEditorBuilder('tiptap')]
class TipTapEditorBuilder implements RichtextEditorBuilderInterface
{
    public function __construct(protected readonly ConfigurationService $configurationService)
    {
    }

    public function buildDefinition(string $presetName, array $data): RichtextEditorDefinition
    {
        return new RichtextEditorDefinition(
            html: $this->buildHtml($presetName, $data),
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

    protected function buildHtml(string $presetName, array $data): string
    {
        $editorOptions = $this->configurationService->getConfiguration($presetName, $data);
        $editorOptions['id'] = htmlspecialchars($data['parameterArray']['itemFormElName']);

        $editorAttributes = GeneralUtility::implodeAttributes([
            'options' => GeneralUtility::jsonEncodeForHtmlAttribute($editorOptions, false)
        ], true);

        $html = [];
        $html[] =           '<editor-tiptap ' . $editorAttributes . '>';
        $html[] =                 '<textarea>';
        $html[] =                   htmlspecialchars($data['parameterArray']['itemFormElValue']);
        $html[] =                 '</textarea>';
        $html[] =           '</editor-tiptap>';
        return implode(LF, $html);
    }
}
