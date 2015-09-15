<?php

    class StringOfObjects implements Iterator {

        private $index = 0;
        private $arrayOfObjects = array(); //array of objects

        public function __construct() {
            $this->index = 0;
        }

        function rewind() {
            $this->index = 0;
        }

        function current() {
            return $this->arrayOfObjects[$this->index];
        }

        function key() {
            return $this->index;
        }

        function next() {
            ++$this->index;
        }

        function valid() {
            return isset($this->arrayOfObjects[$this->index]);
        }

        public function addOneObjectToArray($object) {

            $this->arrayOfObjects[] = $object;
            return $this;
        }

        public function getArrayOfObjects() {
            return $this->arrayOfObjects;
        }

    }

?>