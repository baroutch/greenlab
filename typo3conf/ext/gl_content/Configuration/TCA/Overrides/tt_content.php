<?php
$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist']['glcontent_pi1'] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    // plugin signature: <extension key without underscores> '_' <plugin name in lowercase>
    'glcontent_pi1',
    // Flexform configuration schema file
    'FILE:EXT:gl_content/Configuration/FlexForms/BlocAboutUs.xml'
);

$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist']['glcontent_pi2'] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    // plugin signature: <extension key without underscores> '_' <plugin name in lowercase>
    'glcontent_pi2',
    // Flexform configuration schema file
    'FILE:EXT:gl_content/Configuration/FlexForms/BlocCitation.xml'
);

$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist']['glcontent_pi3'] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    // plugin signature: <extension key without underscores> '_' <plugin name in lowercase>
    'glcontent_pi3',
    // Flexform configuration schema file
    'FILE:EXT:gl_content/Configuration/FlexForms/BlocPhotos.xml'
);