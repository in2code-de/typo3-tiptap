<?php

declare(strict_types=1);

namespace In2code\In2TipTap\Editor\Mapper;

trait IsNeededTrait
{
    public function isNeeded(array $fieldConfiguration): bool
    {
        return self::EDITOR_NAME === ($fieldConfiguration['config']['editor'] ?? CkEditorMapper::EDITOR_NAME);
    }
}
