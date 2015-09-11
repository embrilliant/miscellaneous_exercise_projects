<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 16:50
 */

    class Bookshelf implements Iterator {

        private $index = 0;
        private $arrayOfBooks = array(); //array of objects

        public function __construct() {
            $this->index = 0;
        }

        function rewind() {
            $this->index = 0;
        }

        function current() {
            return $this->arrayOfBooks[$this->index];
        }

        function key() {
            return $this->index;
        }

        function next() {
            ++$this->index;
        }

        function valid() {
            return isset($this->arrayOfBooks[$this->index]);
        }

        public function addOneBookToArray(Book $book) {

            $this->arrayOfBooks[] = $book;
            return $this;
        }

        public function getArrayOfBooks() {
            return $this->arrayOfBooks;
        }

        public function printArrayOfBooks() {
            print_r( $this->getArrayOfBooks() );
        }


    }

?>