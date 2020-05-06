<?php

namespace GREENLAB\GlCocktail\Domain\Model;

use TYPO3\CMS\Extbase\DomainObject\AbstractEntity;

class Cocktail extends AbstractEntity
{
    protected $name = '';

    protected $description = '';

    protected $price = 0;

    /**
     * images to use in the gallery
     *
     * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference>
     */
    protected $image;

    public function __construct(string $name = '', string $description = '', int $price = 0)
    {
        $this->setName($name);
        $this->setDescription($description);
        $this->setPrice($price);
        $this->images = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setPrice(int $price): void
    {
        $this->price = $price;
    }

    public function getPrice(): int
    {
        return $this->price;
    }

    /**
     * sets the Image
     *
     * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage $image
     *
     * @return void
     */
    public function setImage($image) {
        $this->image = $image;
    }

    /**
     * get the Image
     *
     * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage
     */
    public function getImage() {
        return $this->image;
    }
}