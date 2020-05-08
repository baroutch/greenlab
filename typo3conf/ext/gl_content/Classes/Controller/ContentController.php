<?php
namespace GREENLAB\GlContent\Controller;

use \TYPO3\CMS\Core\Utility\GeneralUtility;

class ContentController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

    protected $collections = null;

    public function __construc(){
        parent::__construct();
        $this->$fileCollectionRepository = new FileCollectionRepository();
    }

    public function blocAboutUsAction(){

        $this->view->assign('titre', $this->settings['titre']);
        $this->view->assign('description', $this->settings['description']);

        return;

    }

    public function blocCitationAction(){

        $this->view->assign('citation', $this->settings['citation']);
        $this->view->assign('signature', $this->settings['signature']);

        return;

    }

    public function blocPhotosAction(){

        $fileRepository = GeneralUtility::makeInstance(\TYPO3\CMS\Core\Resource\ResourceFactory::class);
        $fileObjects = $fileRepository->getCollectionObject($this->settings['selectedImages']);

        $fileObjects->loadContents();

        $this->view->assign('fileObjects', $fileObjects);

        return;

    }

    public function blocInstaAction(){

        $this->view->assign('token', $this->settings['token']);

        return;

    }

    public function blocContactAction(){

        $this->view->assign('coord', $this->settings['coord']);
        $this->view->assign('description', $this->settings['description']);

        return;

    }
}