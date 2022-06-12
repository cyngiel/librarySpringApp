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
    items               INT(3) UNSIGNED NOT NULL DEFAULT 0, 
    
    PRIMARY KEY (book_id)
);

CREATE TABLE library.book_item
(
	book_item_id		INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    status				VARCHAR(20) DEFAULT 'stock',
    book_id             INT(3) UNSIGNED NOT NULL,

    PRIMARY KEY (book_item_id),
    FOREIGN KEY (book_id) REFERENCES book(book_id)
);

DELIMITER $$
CREATE TRIGGER library.update_book_items_counter_on_insert
    AFTER INSERT ON library.book_item
FOR EACH ROW
BEGIN
  UPDATE library.book SET items = items + 1 WHERE book_id = NEW.book_id;
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER library.update_book_items_number_on_delete
    AFTER DELETE ON book_item
FOR EACH ROW
BEGIN
  UPDATE library.book SET items = items - 1 WHERE library.book_id = OLD.book_id;
END $$
DELIMITER ;

CREATE TABLE library.borrowing
(
	borrowing_id		INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    date				date, 
    book_item_id        INT(3) UNSIGNED NOT NULL,
    user_id             INT(3) UNSIGNED NOT NULL,

    PRIMARY KEY (borrowing_id),
    FOREIGN KEY (book_item_id) REFERENCES book_item(book_item_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE library.news
(
	news_id		        INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    title               VARCHAR(50) NOT NULL,    
    content             VARCHAR(1000)
);


#########################################################
#########################################################
#########################################################

insert into library.book (title, author, category, publish_year, publishing_house, catalog_number, items, description)
values ("Harry Potter i Kamień Filozoficzny", "J.K. Rowling", "Fantasy", 2016, "Media Rodzina", "9788380084322", 0, 
    "Książka „Harry Potter i Kamień Filozoficzny” rozpoczyna cykl o młodym czarodzieju i jego licznych przygodach. Tytułowy Harry Potter wychowywany jest przez nieprzychylnych mu ciotkę i wuja. Jego rodzice zginęli w tajemniczych okolicznościach, a jedyne, co mu po nich pozostało to blizna na czole w kształcie błyskawicy. W dniu swoich 11. urodzin bohater dowiaduje się, że istnieje świat, o którym nie miał pojęcia.");

insert into library.user (name, last_name, email, password)
values ("Jan", "Kowalski", "jan.kowalski@example.com", "haslo123");
