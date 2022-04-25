# LibrarySpringApp

A library rest spring app



## Database

cd to /docker and execute build to create database container

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

## Check connection with server


run the spring app and ping

```bash
  localhost:8080/ping 
```

should recive "pong"


## API Reference
#### Get list of all books
```http
  GET /book/all
```
response:

```JSON
  [
    {
        "book_id": 1,
        "title": "tytuł",
        "author": "autor",
        "category": "kategoria",
        "publish_year": 2022,
        "publishing_house": "wydawnictwo",
        "description": "opis opis opis opis",
        "catalog_number": "12345678",
        "items": 5,
        "available_items": 2
    }
]
```

#### Add a book

```http
  POST /book/add
```
parameters:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | **Required**.      |
| `author`  | `string` | **Required**.     |
| `category` | `string` | **Required**.   |
| `publish_year` | `int` | **Required**.  |
| `publishing_house` | `string`  |**Required**.    |
| `description` | `string`       |**Required**.    |
| `catalog_number` | `string`    |**Required**.    |
| `items` | `int` | **Required**.  |


## Database LIBRARY schema

#### library.book


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title`   | `string` | **NOT NULL**.      |
| `author`  | `string` | **NOT NULL**.     |
| `category` | `string` | **NOT NULL**.   |
| `publish_year` | `int` | **NOT NULL**.  |
| `publishing_house` | `string`  |    |
| `description` | `string`       |    |
| `catalog_number` | `string`    |    |
| `items` | `int` | **NOT NULL**.  |
| `available_items` | `int` | **NOT NULL**.  |
| `book_id` | `int` | **NOT NULL**, *AUTO_INCREMENT*. |


#### library.user

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |**NOT NULL**.  |
| `last_name` | `string` | **NOT NULL**. |
| `email`     | `string` | **NOT NULL**.  |
| `password`  | `string` | **NOT NULL**.  |
| `user_id`    | `int` | **NOT NULL**, *AUTO_INCREMENT*.|
