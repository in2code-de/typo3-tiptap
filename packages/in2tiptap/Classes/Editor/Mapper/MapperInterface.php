<?php

declare(strict_types=1);

namespace In2code\In2TipTap\Editor\Mapper;

interface MapperInterface
{
    public function resolveConfiguration(array $data): array;
    public function isNeeded(array $fieldConfiguration);
}
