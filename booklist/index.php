<?php

    require_once("Class/Publisher.php");

    require_once("Class/Person.php");

    require_once("Class/Person/Author.php");

    require_once("Class/Person/Borrower.php");

    require_once("Class/Book.php");

    require_once("Class/Bookshelf.php");

    require_once("Class/Machine/Printer/BrowserPrinter.php");

    require_once("Class/Machine/Printer/DataPrinter.php");

    $book1Author = new Author("Douglas", "Crockford");
    $book1Publisher = new Publisher("O'Reilly");
    $book1Borrower = new Borrower("Daniel", "Schulz");
    $book1 = new Book(1, "JavaScript, The Good Part", $book1Author, $book1Publisher, $book1Borrower);

    $book2Author = new Author("John", "Resig");
    $book2Publisher = new Publisher("Manning");
    $book2Borrower = new Borrower("Michael", "Neuhaus");
    $book2 = new Book(2, "Secrets Of The JavaScript Ninja", $book2Author, $book2Publisher, $book2Borrower);

    $book3Author = new Author("Mark Ethan", "Trostler");
    $book3Publisher = new Publisher("O'Reilly");
    $book3Borrower = new Borrower();
    $book3 = new Book(3, "Testable JavaScript", $book3Author, $book3Publisher, $book3Borrower);

    $book4Author = new Author("Stoyan", "Stefanov");
    $book4Publisher = new Publisher("O'Reilly");
    $book4Borrower = new Borrower("Daniel", "Schulz");
    $book4 = new Book(4, "JavaScript Patterns", $book4Author, $book4Publisher, $book4Borrower);

    $book5Author = new Author("Marijn", "Haverbeke");
    $book5Publisher = new Publisher("no starch press");
    $book5Borrower = new Borrower();
    $book5 = new Book(5, "Eloquent JavaScript", $book5Author, $book5Publisher, $book5Borrower);

    $newBookshelf = new Bookshelf;

    $newBookshelf->addOneBookToArray($book1);
    $newBookshelf->addOneBookToArray($book2);
    $newBookshelf->addOneBookToArray($book3);
    $newBookshelf->addOneBookToArray($book4);
    $newBookshelf->addOneBookToArray($book5);

    $type = (int)$_GET['type'];

    if ( isset( $_GET['type'] ) ) {
        if ( $type === 1 ) {
            $pinkBrowserPrinter = new BrowserPrinter($newBookshelf);
        } else if ( $type === 2 ) {
            $pinkDataPrinter = new DataPrinter($newBookshelf);
        } else {
            echo "Nothing to print.";
        }
    } else {
        echo "Something is wrong.";
    }

?>