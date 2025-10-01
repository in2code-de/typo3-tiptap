<?php

defined('TYPO3') or die();

// Register TypoScript
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup(
    '@import "EXT:in2tiptap/Configuration/TypoScript/setup.typoscript"'
);

// Register TypoScript Constants
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants(
    '@import "EXT:in2tiptap/Configuration/TypoScript/constants.typoscript"'
);

// Register feature toggle
$GLOBALS['TYPO3_CONF_VARS']['SYS']['features']['rte.tiptap'] ??= false;

// Overwrite FormEngine node type resolver hook to render RTE in FormEngine if enabled
$GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['nodeResolver'][1480314091] = [
    'nodeName' => 'text',
    'priority' => 50,
    'class' => \In2code\In2TipTap\Form\Resolver\RteNodeResolver::class,
];
