<?php
defined('TYPO3_MODE') || die('Access denied.');

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    'GreenLab.GlCocktail',
    'pi1',
    [
        \GREENLAB\GlCocktail\Controller\CocktailController::class => 'zoom',
    ],
    // non-cacheable actions
    [
        \GREENLAB\GlCocktail\Controller\CocktailController::class => '',
    ]
);