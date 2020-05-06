<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Plugin Cocktail',
    'description' => 'Plugin qui gère la liste des cocktails',
    'category' => 'plugin',
    'author' => 'Baroutch',
    'author_company' => 'Baroutch Inc.',
    'author_email' => 'baroutch@gmail.com',
    'state' => 'alpha',
    'clearCacheOnLoad' => true,
    'version' => '0.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-10.3.99',
        ],
    ],
];