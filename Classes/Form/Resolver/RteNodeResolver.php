<?php

declare(strict_types=1);

namespace In2code\Typo3TipTap\Form\Resolver;

use In2code\Typo3TipTap\Form\Element\TipTapTextElement;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use TYPO3\CMS\Backend\Form\NodeResolverInterface;

#[Autoconfigure(public: true)]
class RteNodeResolver implements NodeResolverInterface
{
    public function __construct(protected array $data = [])
    {
    }

    public function setData(array $data): void
    {
        $this->data = $data;
    }

    /**
     * Returns RichTextElement as class name if RTE widget should be rendered.
     */
    public function resolve(): ?string
    {
        $parameterArray = $this->data['parameterArray'];

        if ($this->shouldRenderRichtext($parameterArray) === false) {
            return null;
        }

        return TipTapTextElement::class;
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
