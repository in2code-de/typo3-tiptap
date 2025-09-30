<?php

return [
    'dependencies' => [
        'backend',
    ],
    'tags' => [
        'backend.form',
    ],
    'imports' => [
        '@in2tiptap/tiptap/' => [
            'path' => 'EXT:in2tiptap/Resources/Public/TipTap/',
        ],
        '@example/in2code/' => [
            'path' => 'EXT:in2tiptap/Resources/Public/Js/',
        ],
    ],
];
