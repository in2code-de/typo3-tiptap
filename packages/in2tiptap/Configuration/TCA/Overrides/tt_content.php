<?php

defined('TYPO3') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addRecordType(
    [
        'label' => 'Tiptap',
        'description' => 'Text and media element using Tiptap editor',
        'value' => 'tiptap',
        'icon' => 'mimetypes-x-content-text-media',
    ],
    '
        --palette--;;headers,
        bodytext;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:bodytext_formlabel,
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:media,
        assets,
        --palette--;;mediaAdjustments,
        --palette--;;gallerySettings,
        --palette--;;imagelinks,
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:appearance,
        --palette--;;frames,
        --palette--;;appearanceLinks,
    --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories,
        categories',
    [
        'columnsOverrides' => [
            'bodytext' => [
                'config' => [
                    'enableRichtext' => true,
                    'editor' => 'tiptap',
                ],
            ],
        ],
    ]
);