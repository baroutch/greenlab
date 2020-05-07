<?php

namespace GREENLAB\GlCocktail\Controller;

use GREENLAB\GlCocktail\Domain\Repository\CocktailRepository;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;

class CocktailController extends ActionController
{
    private $cocktailRepository;

    /**
     * Inject the cocktail repository
     *
     * @param \GREENLAB\Cocktail\Domain\Repository\CocktailRepository $cocktailRepository
     */
    public function injectCocktailRepository(CocktailRepository $cocktailRepository)
    {
        $this->cocktailRepository = $cocktailRepository;
    }

    public function zoomAction()
    {
        $cocktail = $this->cocktailRepository->findByUid($this->settings['selectedCocktail']);
        $this->view->assign('cocktail', $cocktail);
        $this->view->assign('titre', $this->settings['titre']);
    }

    public function carteAction()
    {
        $cocktails = $this->settings['selectedCocktail-menu'];

        $cocktails_tab = explode(',', $cocktails);

        foreach($cocktails_tab as $k=>$row){
            $cocktail_object[$k] = $this->cocktailRepository->findByUid($row);
        }

        foreach($cocktail_object as $k=>$row){
            $categories = $row->getCategories()->toArray();

            //print_r($categories);
            foreach($categories as $j=>$line){
                $output[$line->getTitle()][] = $row;
            }/**/
        }

        //print_r($output);
        $this->view->assign('titre-gamme', $this->settings['titre-gamme']);
        $this->view->assign('output', $output);
    }
}