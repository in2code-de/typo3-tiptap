<?php

use In2code\In2TipTap\Controller\BrowseLinksController;

/**
 * Definitions of routes for rte-ckeditor.
 */

return [
    // Register RTE browse links wizard
    'in2tiptap_wizard_browse_links' => [
        'path' => '/tiptap/wizard/browselinks',
        'target' => BrowseLinksController::class . '::mainAction',
    ],
];
