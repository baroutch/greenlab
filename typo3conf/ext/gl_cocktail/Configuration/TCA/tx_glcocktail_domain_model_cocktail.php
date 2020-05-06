<?php
return [
    'ctrl' => [
        'title' => 'LLL:EXT:gl_cocktail/Resources/Private/Language/locallang_db.xlf:tx_glcocktail_domain_model_cocktail',
        'label' => 'name',
        'iconfile' => 'EXT:gl_cocktail/Resources/Public/Icons/Product.svg',
    ],
    'columns' => [
        'name' => [
            'label' => 'LLL:EXT:gl_cocktail/Resources/Private/Language/locallang_db.xlf:tx_glcocktail_domain_model_cocktail.item_label',
            'config' => [
                'type' => 'input',
                'size' => '20',
                'eval' => 'trim',
            ],
        ],
        'description' => [
            'label' => 'LLL:EXT:gl_cocktail/Resources/Private/Language/locallang_db.xlf:tx_glcocktail_domain_model_cocktail.item_description',
            'config' => [
                'type' => 'text',
                'eval' => 'trim',
            ],
        ],
        'price' => [
            'label' => 'LLL:EXT:gl_cocktail/Resources/Private/Language/locallang_db.xlf:tx_glcocktail_domain_model_cocktail.item_price',
            'config' => [
                'type' => 'input',
                'size' => '4',
                'eval' => 'int',
            ],
        ],
        'image' => array(
            'exclude' => 0,
            'label' => 'images',
            'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
                'images',
                array(
                    'appearance' => array(
                                'headerThumbnail' => array(
                                    'width' => '100',
                                    'height' => '100',
                                ),
                            'createNewRelationLinkTitle' => 'LLL:EXT:gl_cocktail/Resources/Private/Language/locallang_db.xlf:tx_glcocktail_domain_model_cocktail.add-images'
                            ),
                    // custom configuration for displaying fields in the overlay/reference table
                    // to use the imageoverlayPalette instead of the basicoverlayPalette
                    'foreign_types' => array(
                        '0' => array(
                            'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                        ),
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => array(
                            'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                        ),
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => array(
                            'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                        ),
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_AUDIO => array(
                            'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                        ),
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_VIDEO => array(
                            'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                        ),
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_APPLICATION => array(
                            'showitem' => '
                                --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                                --palette--;;filePalette'
                        )
                    ),
                ),
                $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']
            )
        ),
    ],
    'types' => [
        '0' => ['showitem' => 'name, description, price, image'],
    ],
];