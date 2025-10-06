<?php

return [
    'dependencies' => [
        'backend',
    ],
    'tags' => [
        'backend.form',
    ],
    'imports' => [
        '@typo3-tiptap/tiptap/' => [
            'path' => 'EXT:typo3-tiptap/Resources/Public/TipTap/',
        ],
        '@example/in2code/' => [
            'path' => 'EXT:typo3-tiptap/Resources/Public/Js/',
        ],
    ],
];
