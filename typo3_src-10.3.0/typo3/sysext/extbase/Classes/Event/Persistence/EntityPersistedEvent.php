<?php
declare(strict_types = 1);

namespace TYPO3\CMS\Extbase\Event\Persistence;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Extbase\DomainObject\DomainObjectInterface;

/**
 * Event which is fired after an object was pushed to the storage backend
 */
final class EntityPersistedEvent
{
    /**
     * @var DomainObjectInterface
     */
    private $persistedObject;

    public function __construct(DomainObjectInterface $persistedObject)
    {
        $this->persistedObject = $persistedObject;
    }

    public function getObject(): DomainObjectInterface
    {
        return $this->persistedObject;
    }
}
