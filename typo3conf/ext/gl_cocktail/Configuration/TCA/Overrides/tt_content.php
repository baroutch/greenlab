<?php

$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist']['glcocktail_pi1'] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    // plugin signature: <extension key without underscores> '_' <plugin name in lowercase>
    'glcocktail_pi1',
    // Flexform configuration schema file
    'FILE:EXT:gl_cocktail/Configuration/FlexForms/ZoomCocktail.xml'
);