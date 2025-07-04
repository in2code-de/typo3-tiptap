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
