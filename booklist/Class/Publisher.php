<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 16:34
 */

    class Publisher {

        private $publisherName;

        public function __construct($publisherName) {
            $this->publisherName = $publisherName;
        }

        public function getPublisherName() {
            return $this->publisherName;
        }

    }

?>