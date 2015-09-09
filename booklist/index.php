<html style="background-color: #FF4C8F; font-family: Arial; color: white; text-shadow: #313131 1px 1px 5px"></html>
<?php

    class Book {

        private $_id;
        private $_title;
        private $_author;
        private $_publisher;
        private $_borrowed;

        public function __construct($id, $title, $author, $publisher, $borrowed) {

            $this->_id = $id;
            $this->_title = $title;
            $this->_author = $author;
            $this->_publisher = $publisher;
            $this->_borrowed = $borrowed;

        }

        public function getId() {
            return $this->_id;
        }

        public function setTitle($title) {
            $this->_title = $title;
        }

        public function getTitle() {
            return $this->_title;
        }

        public function setAuthor($author) {
            $this->_author = $author;
        }

        public function getAuthor() {
            return $this->_author;
        }

        public function setPublisher($publisher) {
            $this->_publisher = $publisher;
        }

        public function getPublisher() {
            return $this->_publisher;
        }

        public function setBorrowed($borrowed) {
            $this->_publisher = $borrowed;
        }

        public function getBorrowed() {
            return $this->_borrowed;
        }

    }

    class Bookshelf implements Iterator {

        private $index = 0;
        private $arrayOfBooks = array();

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

    $book1 = new Book(1, "JavaScript, The Good Parts", "Douglas Crockford", "O'Reilly", "Daniel Schulz");
    $book2 = new Book(2, "Secrets Of The JavaScript Ninja", "John Resig", "Manning", "Michael Neuhaus");
    $book3 = new Book(3, "Testable JavaScript", "Mark Ethan Trostler", "O'Reilly", "-");
    $book4 = new Book(4, "JavaScript Patterns", "Stoyan Stefanov", "O'Reilly", "Daniel Schulz");
    $book5 = new Book(5, "Eloquent JavaScript", "Marijn Haverbeke", "no starch press", "-");

    $newBookshelf = new Bookshelf;

    $newBookshelf->addOneBookToArray($book1);
    $newBookshelf->addOneBookToArray($book2);
    $newBookshelf->addOneBookToArray($book3);
    $newBookshelf->addOneBookToArray($book4);
    $newBookshelf->addOneBookToArray($book5);

    foreach ($newBookshelf as $eachBook) {
        $id = $eachBook->getId();
        $title = $eachBook->getTitle();
        $author = $eachBook->getAuthor();
        $publisher = $eachBook->getPublisher();
        $borrowed = $eachBook->getBorrowed();

        echo "$id | $title | $author | $publisher | $borrowed </br><hr>";

    }

// below for testing

/*echo "<br>for testing:<br>";

class Dissert {
    public $flavour = "vanilla";
    public $colour = "cream";
    public $temperature = "iced";
}

$icecream = new Dissert();

foreach ($icecream as $key => $value) {
    echo "$key : $value <br>";
}*/

?>