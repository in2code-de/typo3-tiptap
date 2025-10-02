<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'In2TipTap',
    'state' => 'stable',
    'author' => 'In2code GmbH',
    'author_email' => 'info@in2code.de',
    'version' => '0.0.5',
    'constraints' => [
        'depends' => [
            'typo3' => '13.4.0-13.4.99',
            'fluid_styled_content' => '13.4.0-13.4.99',
            'rte_ckeditor' => '13.4.0-13.4.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
    'autoload' => [
        'psr-4' => [
            'In2code\\In2TipTap\\' => 'Classes',
        ],
    ],
];
