<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'GreenLab.GlContent',
            'Pi1',
            'Bloc About us'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'GreenLab.GlContent',
            'Pi2',
            'Bloc Citation'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'GreenLab.GlContent',
            'Pi3',
            'Bloc Photos'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('gl_content', 'Configuration/TypoScript', 'Plugin Content');

    }
);

/**
 * Register icons
 */
$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
$iconRegistry->registerIcon(
    'extension-greenlab-content-blocaboutus',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:gl_content/Resources/Public/Icons/aboutus.svg']
);

$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
$iconRegistry->registerIcon(
    'extension-greenlab-content-bloccitation',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:gl_content/Resources/Public/Icons/citation.svg']
);

$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
$iconRegistry->registerIcon(
    'extension-greenlab-content-blocphotos',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    ['source' => 'EXT:gl_content/Resources/Public/Icons/photos.svg']
);