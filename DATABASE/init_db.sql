set names utf8;
DROP SCHEMA IF EXISTS library;
CREATE SCHEMA library;

CREATE TABLE library.user
(
	user_id             INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    name                VARCHAR(30) NOT NULL,
    last_name           VARCHAR(30) NOT NULL,
    email               VARCHAR(30) NOT NULL,
    password            VARCHAR(30) NOT NULL,
    
    PRIMARY KEY (user_id)
);

CREATE TABLE library.book
(
	book_id             INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    title               VARCHAR(50) NOT NULL,
    author              VARCHAR(50) NOT NULL,
    category            VARCHAR(50) NOT NULL,
    publish_year        INT(4) UNSIGNED NOT NULL,
    publishing_house    VARCHAR(50), 
    description         VARCHAR(1000), 
    catalog_number      VARCHAR(20), 
    items               INT(3) UNSIGNED NOT NULL, 
    available_items     INT(3) UNSIGNED NOT NULL, 
    
    PRIMARY KEY (book_id)
);

CREATE TABLE library.book_item
(
	book_item_id		INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    status				VARCHAR(20) NOT NULL,
    book_id             INT(3) UNSIGNED NOT NULL ,

    PRIMARY KEY (book_item_id),
    FOREIGN KEY (book_id) REFERENCES book(book_id)
);

CREATE TABLE library.borrowing
(
	borrowing_id		INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    date				date, 
    book_item_id        INT(3) UNSIGNED NOT NULL ,
    user_id             INT(3) UNSIGNED NOT NULL ,

    PRIMARY KEY (borrowing_id),
    FOREIGN KEY (book_item_id) REFERENCES book_item(book_item_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);


#########################################################
#########################################################
#########################################################

insert into library.book (title, author, category, publish_year, publishing_house, catalog_number, items, available_items, description)
values ("Harry Potter i Kamień Filozoficzny", "J.K. Rowling", "Fantasy", 2016, "Media Rodzina", "9788380084322", 5, 2, 
    "Książka „Harry Potter i Kamień Filozoficzny” rozpoczyna cykl o młodym czarodzieju i jego licznych przygodach. Tytułowy Harry Potter wychowywany jest przez nieprzychylnych mu ciotkę i wuja. Jego rodzice zginęli w tajemniczych okolicznościach, a jedyne, co mu po nich pozostało to blizna na czole w kształcie błyskawicy. W dniu swoich 11. urodzin bohater dowiaduje się, że istnieje świat, o którym nie miał pojęcia.");

insert into library.user (name, last_name, email, password)
values ("Jan", "Kowalski", "jan.kowalski@example.com", "haslo123");
