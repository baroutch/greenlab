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
}