<?php

use In2code\Typo3TipTap\Controller\BrowseLinksController;

/**
 * Definitions of routes for rte-ckeditor.
 */
return [
    // Register RTE browse links wizard
    'typo3-tiptap_wizard_browse_links' => [
        'path' => '/tiptap/wizard/browselinks',
        'target' => BrowseLinksController::class . '::mainAction',
    ],
];
