<?php
namespace GREENLAB\GlContent\Controller;

class ContentController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

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
}