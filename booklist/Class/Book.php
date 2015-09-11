<?php
/**
 * Created by PhpStorm.
 * User: Emely Wu
 * Date: 10.09.2015
 * Time: 16:48
 */

    class Book {

        private $id; //int
        private $title; //string
        private $author; //obj
        private $publisher; //obj
        private $borrowed; //obj

        public function __construct($id, $title, Author $author, Publisher $publisher, Borrower $borrowed) {

            $this->id = $id;
            $this->title = $title;
            $this->author = $author;
            $this->publisher = $publisher;
            $this->borrowed = $borrowed;

        }

        public function getId() {
            return $this->id;
        }

        public function setTitle($title) {
            $this->title = $title;
        }

        public function getTitle() {
            return $this->title;
        }

        public function setAuthor($author) {
            $this->author = $author;
        }

        public function getAuthor() {
            return $this->author;
        }

        public function setPublisher($publisher) {
            $this->publisher = $publisher;
        }

        public function getPublisher() {
            return $this->publisher;
        }

        public function setBorrowed($borrowed) {
            $this->publisher = $borrowed;
        }

        public function getBorrowed() {
            return $this->borrowed;
        }

        public function convertToArray() {
            return array(
                        "Id" => $this->id,
                        "Title" => $this->title,
                        "Author" => $this->author->getFirstname() . ' ' .  $this->author->getLastname(),
                        "Publisher" => $this->publisher->getPublisherName(),
                        "Borrowed" => $this->borrowed->getFirstname() . ' ' .  $this->borrowed->getLastname()
                        );
        }

    }

?>