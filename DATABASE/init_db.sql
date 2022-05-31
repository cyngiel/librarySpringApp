CREATE SCHEMA IF NOT EXISTS library;

DROP TABLE IF EXISTS library.book;
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

DROP TABLE IF EXISTS library.book_item;
CREATE TABLE library.book_item
(
	book_item_id		INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    status				VARCHAR(20) NOT NULL,
    book_id             INT(3) UNSIGNED NOT NULL ,

    PRIMARY KEY (book_item_id),
    FOREIGN KEY (book_id) REFERENCES book(book_id)
);

<<<<<<< Updated upstream
DROP TABLE IF EXISTS library.borrowing;
=======
DELIMITER $$
CREATE TRIGGER update_book_items_counter_on_insert
    AFTER INSERT ON book_item
FOR EACH ROW
BEGIN
  UPDATE book SET items = items + 1 WHERE book_id = NEW.book_id;
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER update_book_items_number_on_delete
    AFTER DELETE ON book_item
FOR EACH ROW
BEGIN
  UPDATE book SET items = items - 1 WHERE book_id = OLD.book_id;
END $$
DELIMITER ;

>>>>>>> Stashed changes
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

CREATE TRIGGER library.on_insert_
ON table_name
AFTER  {[INSERT],[UPDATE],[DELETE]}
[NOT FOR REPLICATION]
AS
{sql_statements}


######################################################### 

DROP TABLE IF EXISTS library.user;
CREATE TABLE library.user
(
	user_id             INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
    name                VARCHAR(30) NOT NULL,
    last_name           VARCHAR(30) NOT NULL,
    email               VARCHAR(30) NOT NULL,
    password            VARCHAR(30) NOT NULL,
    
    PRIMARY KEY (user_id)
);

#########################################################
#########################################################
#########################################################

insert into library.book (title, author, category, publish_year, publishing_house, catalog_number, items, available_items, description)
values ("Harry Potter i Kamień Filozoficzny", "J.K. Rowling", "Fantasy", 2016, "Media Rodzina", "9788380084322", 5, 2, 
    "Książka „Harry Potter i Kamień Filozoficzny” rozpoczyna cykl o młodym czarodzieju i jego licznych przygodach. Tytułowy Harry Potter wychowywany jest przez nieprzychylnych mu ciotkę i wuja. Jego rodzice zginęli w tajemniczych okolicznościach, a jedyne, co mu po nich pozostało to blizna na czole w kształcie błyskawicy. W dniu swoich 11. urodzin bohater dowiaduje się, że istnieje świat, o którym nie miał pojęcia.");

insert into library.user (name, last_name, email, password)
values ("Jan", "Kowalski", "jan.kowalski@example.com", "haslo123");
