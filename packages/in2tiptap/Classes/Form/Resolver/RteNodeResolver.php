<?php

declare(strict_types=1);

namespace In2code\In2TipTap\Form\Resolver;

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
        // TODO: resolve editor configuration
        $this->data = $data;
    }

    /**
     * Returns RichTextElement as class name if RTE widget should be rendered.
     *
     * @return string|null New class name or null if this resolver does not change current class name.
     */
    public function resolve(): ?string
    {
        $parameterArray = $this->data['parameterArray'];

        if ((bool)($parameterArray['fieldConf']['config']['enableRichtext'] ?? false) === false
            // If RTE config is found (prepared by TcaText data provider)
            && is_array($parameterArray['fieldConf']['config']['richtextConfiguration'] ?? null) === false
            // If RTE is not disabled on configuration level
            && ($parameterArray['fieldConf']['config']['richtextConfiguration']['disabled'] ?? false)
        ) {
            return null;
        }

        if ($this->features->isFeatureEnabled('rte.tiptap')) {
            return TipTapTextElement::class;
        }

        // default ckeditor
        return RichTextElement::class;
    }
}
