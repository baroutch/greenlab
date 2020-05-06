<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'GreenLab.GlCocktail',
            'pi1',
            'Bloc Aperçu cocktail'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('gl_cocktail', 'Configuration/TypoScript', 'Plugin Cocktail');

    }
);

/**
 * Register icons
 */
$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
$iconRegistry->registerIcon(
    'extension-greenlab-cocktail-showcocktail',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:gl_cocktail/Resources/Public/Icons/cocktail.svg']
);