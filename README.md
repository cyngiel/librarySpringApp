# LibrarySpringApp

A library rest spring app


<hr>

## Setup


## Database

cd to /DATABASE and execute build to create database container

```bash
  docker build -t db . 
```

run the database container  
```bash
 docker run --name db -dp 3306:3306 db
```

init database
```bash
 docker exec -i db mysql -u root --password=password <init_db.sql
```
if error occured
```bash
 ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)
```
Try to rerun last command. If the error persists, make sure mysql-server is installed:
```bash
 sudo apt update

```
```bash
 sudo apt install mysql-server

```


## Check connection with server

run the spring app and ping

```bash
  localhost:8080/ping 
```

should recive "pong"


<hr>


## API endpoints 

### Register user
```http
  POST /register
```

body parameters:


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username`   | `string` | **Required**.      |
| `email`  | `string` | **Required**.     |
| `password`  | `string` | **Required**.     |

### Authenticate user
```http
  POST /authenticate
```
body parameters:


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username`   | `string` | **Required**.      |
| `password`  | `string` | **Required**.     |

response JWT:

```JSON
{
    "token": "eyJhbGciOiJ... ... o8aukg"
}
```

<hr>
All of the following endpoints have to contain Authorization header with JWT!
<hr>

### Get list of all books

```http
  GET /book/all
```
response:

```JSON
  [
    {

        "book_id": 5,
        "title": "Test Title",
        "author": "Test Author",
        "category": "Test Category",
        "items": 0,
        "stockItemsCount": 0,
        "borrowedItemsCount": 0,
        "reservedItemsCount": 0
    }, 
    { 
    ...
    }
]
```

### Search for books by name and/or author

```http
  GET /book/search
```
body parameters:


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text`   | `string` | **Required**.      |
response:

```JSON
  [
    {

        "book_id": 5,
        "title": "Test Title",
        "author": "Test Author",
        "category": "Test Category",
        "items": 0,
        "stockItemsCount": 0,
        "borrowedItemsCount": 0,
        "reservedItemsCount": 0
    }, 
    { 
    ...
    }
]
```

### Get book by ID
Need to pass id as a parameter!
```http
  GET /book/id?id=1
```

response:

```JSON
 
{
    "book_id": 3,
    "title": "Test Title",
    "author": "Test Author",
    "category": "Test Category",
    "publish_year": 0,
    "publishing_house": null,
    "description": null,
    "catalog_number": null,
    "items": 2,
    "stockItemsCount": 2,
    "borrowedItemsCount": 0,
    "reservedItemsCount": 0
}

```


### Get list of all RESERVED books
```http
  GET /book/reserve/all
```
response:

```JSON
  [
    {
        "book_id": 1,
        "title": "Test Title",
        "author": "Test Author",
        "category": "Test Category",
        "publish_year": 2016,
        "publishing_house": "Test Publishing House",
        "catalog_number": "9788380084322",
        "items": 4,
        "book_item_id": 2,
        "status": "RESERVED"
    }, 
    { 
    ...

    }
]
```



### Get list of all BORROWED books
```http
  GET /book/borrow/all
```
response:

```JSON
  [
    {
        "book_id": 3,
        "title": "Test Title",
        "author": "Test Author",
        "category": "Test Category",
        "publish_year": 2015,
        "publishing_house": "Test Publishing House",
        "catalog_number": "7701",
        "items": 2,
        "book_item_id": 5,
        "status": "BORROWED"
    }, 
    { 
    ...
    }
]
```

### Add a book


```http
  POST /book/add
```

body parameters:


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | **Required**.      |
| `author`  | `string` | **Required**.     |
| `category` | `string` | **Required**.   |
| `publish_year` | `int` | **Required**.  |
| `publishing_house` | `string`  |**Required**.    |
| `description` | `string`       |**Required**.    |
| `catalog_number` | `string`    |**Required**.    |


### Add a book item (unique copy of the book)

```http
  POST /book/add/item?book_id=3
```
Need to pass book_id as a parameter!

### Reserve a book item (unique copy of the book)

```http
  POST /book/reserve?id=3
```
Need to pass id of the BOOK as a parameter!

### Borrow a book item (unique copy of the book)

```http
  POST /book/borrow?id=3
```
Need to pass id of the BOOK ITEM as a parameter!

### Return a book item (unique copy of the book)

```http
  POST /book/return?id=3
```
Need to pass id of the BOOK ITEM as a parameter!

### Get number of all stock, borowed and reserved books
```http
  GET /book/stats
```

```JSON
  
    {
        "borrowed" : 30,
        "reserved" : 10,
        "stock", "50"
    }

```

### Add a news

```http
  POST /news/add
```
parameters:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | **Required**.      |
| `content`  | `string` |     |

### Get list of all news

```http
  POST /news/all
```
response:

```JSON
  [
    {
        "news_id": 7,
        "title": "test news",
        "content": "content content content"
    },
    { 
    ...
    }
]
```
<hr>

## Database LIBRARY schema

### library.book

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `book_id` | `int` | **NOT NULL**, *AUTO_INCREMENT*. *PRIMARY_KEY* |
| `title`   | `string` | **NOT NULL**.      |
| `author`  | `string` | **NOT NULL**.     |
| `category` | `string` | **NOT NULL**.   |
| `publish_year` | `int` | **NOT NULL**.  |
| `publishing_house` | `string`  |    |
| `description` | `string`       |    |
| `catalog_number` | `string`    |    |
| `items` | `int` | **NOT NULL**.  |




### library.book_item

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `book_item_id`   | `int` | **NOT NULL**. *AUTO_INCREMENT*.  *PRIMARY_KEY* |
| `status` | `string` | **NOT NULL** |
| `book_id` | `int` | **NOT NULL**, *FOREGIN_KEY*. |

### library.borrowing

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `borrowing_id`   | `int` | **NOT NULL**. *AUTO_INCREMENT*. *PRIMARY_KEY* |
| `status` | `string` | **NOT NULL** |
| `user_id` | `int` |**NOT NULL**, *FOREGIN_KEY*. |
| `book_item_id`   | `int` | **NOT NULL**. *FOREGIN_KEY*.  |

### library.news

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `news_id`   | `int` | **NOT NULL**. *AUTO_INCREMENT*. *PRIMARY_KEY*  |
| `title` | `string` | **NOT NULL** |
| `content` | `string` | |

### library.user


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |**NOT NULL**.  |
| `last_name` | `string` | **NOT NULL**. |
| `email`     | `string` | **NOT NULL**.  |
| `password`  | `string` | **NOT NULL**.  |
| `user_id`    | `int` | **NOT NULL**, *AUTO_INCREMENT*.|
