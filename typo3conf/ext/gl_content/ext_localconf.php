<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'GreenLab.GlContent',
            'Pi1',
            array(
                'Content' => 'blocAboutUs',

            ),
            // non-cacheable actions
            array(
                'Content' => 'blocAboutUs',

            )
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'GreenLab.GlContent',
            'Pi2',
            array(
                'Content' => 'blocCitation',

            ),
            // non-cacheable actions
            array(
                'Content' => 'blocCitation',

            )
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'GreenLab.GlContent',
            'Pi3',
            array(
                'Content' => 'blocPhotos',

            ),
            // non-cacheable actions
            array(
                'Content' => 'blocPhotos',

            )
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'GreenLab.GlContent',
            'Pi4',
            array(
                'Content' => 'blocInsta',

            ),
            // non-cacheable actions
            array(
                'Content' => 'blocInsta',

            )
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'GreenLab.GlContent',
            'Pi5',
            array(
                'Content' => 'blocContact',

            ),
            // non-cacheable actions
            array(
                'Content' => 'blocContact',

            )
        );

        // wizards
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            'mod {
                wizards.newContentElement.wizardItems.plugins {
                    elements {
                        pi1 {
                            iconIdentifier = extension-greenlab-content-blocaboutus
                            title = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi1
                            description = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi1.description
                            tt_content_defValues {
                                CType = list
                                list_type = glcontent_pi1
                            }
                        }
                    }
                    show = *
                }
           }'
        );

        // wizards
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            'mod {
                wizards.newContentElement.wizardItems.plugins {
                    elements {
                        pi2 {
                            iconIdentifier = extension-greenlab-content-bloccitation
                            title = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi2
                            description = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi2.description
                            tt_content_defValues {
                                CType = list
                                list_type = glcontent_pi2
                            }
                        }
                    }
                    show = *
                }
           }'
        );

        // wizards
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            'mod {
                wizards.newContentElement.wizardItems.plugins {
                    elements {
                        pi3 {
                            iconIdentifier = extension-greenlab-content-blocphotos
                            title = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi3
                            description = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi3.description
                            tt_content_defValues {
                                CType = list
                                list_type = glcontent_pi3
                            }
                        }
                    }
                    show = *
                }
           }'
        );

        // wizards
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            'mod {
                wizards.newContentElement.wizardItems.plugins {
                    elements {
                        pi4 {
                            iconIdentifier = extension-greenlab-content-blocinsta
                            title = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi4
                            description = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi4.description
                            tt_content_defValues {
                                CType = list
                                list_type = glcontent_pi4
                            }
                        }
                    }
                    show = *
                }
           }'
        );

        // wizards
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            'mod {
                wizards.newContentElement.wizardItems.plugins {
                    elements {
                        pi5 {
                            iconIdentifier = extension-greenlab-content-bloccontact
                            title = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi5
                            description = LLL:EXT:gl_content/Resources/Private/Language/locallang_db.xlf:tx_gl_content_domain_model_pi5.description
                            tt_content_defValues {
                                CType = list
                                list_type = glcontent_pi5
                            }
                        }
                    }
                    show = *
                }
           }'
        );
    }
);