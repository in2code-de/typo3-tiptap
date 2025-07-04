<?php

declare(strict_types=1);

namespace In2code\In2TipTap\Editor;

use In2code\In2TipTap\Editor\Mapper\MapperInterface;

class ConfigurationService
{
    public function __construct(private readonly iterable $mappers)
    {}

    public function getConfiguration(array $fieldConfiguration): array
    {
        $mapper = $this->getMapper($fieldConfiguration);
        return $mapper->map();
    }

    private function getMapper(array $fieldConfiguration): ?MapperInterface
    {
        foreach ($this->mappers as $mapper) {
            if ($mapper->isNeeded($fieldConfiguration)) {
                return $mapper;
            }
        }

        return null;
    }
}
