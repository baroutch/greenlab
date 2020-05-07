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

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    'GreenLab.GlCocktail',
    'pi2',
    [
        \GREENLAB\GlCocktail\Controller\CocktailController::class => 'carte',
    ],
    // non-cacheable actions
    [
        \GREENLAB\GlCocktail\Controller\CocktailController::class => '',
    ]
);