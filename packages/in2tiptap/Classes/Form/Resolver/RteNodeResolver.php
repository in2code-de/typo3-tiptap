<?php

declare(strict_types=1);

namespace In2code\In2TipTap\Form\Resolver;

use In2code\In2TipTap\Exception\MissingEditorConfigurationException;
use In2code\In2TipTap\Form\Element\TipTapTextElement;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Backend\Form\NodeResolverInterface;
use TYPO3\CMS\Core\Configuration\Features;
use TYPO3\CMS\RteCKEditor\Form\Element\RichTextElement;

#[Autoconfigure(public: true)]
class RteNodeResolver implements NodeResolverInterface
{
    public function __construct(protected Features $features, protected array $data = [])
    {
    }

    public function setData(array $data): void
    {
        $this->data = $data;
    }

    /**
     * Returns RichTextElement as class name if RTE widget should be rendered.
     *
     * @return string|null New class name or null if this resolver does not change current class name.
     * @throws MissingEditorConfigurationException
     */
    public function resolve(): ?string
    {
        $parameterArray = $this->data['parameterArray'];

        if ($this->shouldRenderRichtext($parameterArray) === false) {
            return null;
        }

        if ($this->features->isFeatureEnabled('rte.tiptap')) {
            $this->setProperRichtextConfiguration('tiptap');
            return TipTapTextElement::class;
        }

        return RichTextElement::class;

    }

    /**
     * Could be extended in the future to split up editor configurations like: editor.tiptap, editor.ckeditor, ...
     * @throws MissingEditorConfigurationException
     */
    private function setProperRichtextConfiguration(string $editor): void
    {
        if (!isset($this->data['parameterArray']['fieldConf']['config']['richtextConfiguration']['editor'][$editor]['config'])) {
            throw new MissingEditorConfigurationException(
                'Missing editor configuration for editor: ' . $editor,
                1755159351
            );
        }

        $this->data['parameterArray']['fieldConf']['config']['richtextConfiguration']['editor'] =
            $this->data['parameterArray']['fieldConf']['config']['richtextConfiguration']['editor'][$editor];
    }

    private function shouldRenderRichtext(array $parameterArray): bool
    {
        $config = $parameterArray['fieldConf']['config'] ?? null;
        if (!is_array($config)) {
            return false;
        }

        // If RTE is enabled for field
        return ((bool)($config['enableRichtext'] ?? false) === true)
            // If RTE config is found (prepared by TcaText data provider)
            && is_array($config['richtextConfiguration'] ?? null)
            // If RTE is not disabled on configuration level
            && !($config['richtextConfiguration']['disabled'] ?? false);
    }
}
