package com.example.library.accessingdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static com.example.library.accessingdata.BookItemStatus.*;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/book")
public class BookController {
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private BookItemRepository bookItemRepository;
    @Autowired
    private NewsRepository newsRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    ResponseEntity<String> addNewBook(@RequestBody Book book) {
        bookRepository.save(book);
        newsRepository.save(new News(book.getTitle(), book.getAuthor()));
        return new ResponseEntity<>("saved", HttpStatus.OK);
    }

    @PostMapping(path = "/add/item")
    public @ResponseBody
    ResponseEntity<String> deleteBookItem(@RequestBody BookItem bookItem) {
        bookItemRepository.save(bookItem);
        return new ResponseEntity<>("saved", HttpStatus.OK);
    }

    @PostMapping(path = "/delete/book")
    public @ResponseBody
    ResponseEntity<String> deleteBook(int bookId) {
        if(!bookRepository.findById(bookId).isPresent()){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        try {
            bookRepository.deleteById(bookId);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(path = "/delete/item")
    public @ResponseBody
    ResponseEntity<String> addNewBookItem(int bookItemId) {
        try {
            bookItemRepository.deleteById(bookItemId);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    ResponseEntity<Iterable<BookOverallInfo>> getAllBooks() {
        Iterable<Book> allBooks = bookRepository.findAll();
        List<BookOverallInfo> allBookOverallInfo = StreamSupport
                .stream(allBooks.spliterator(), false)
                .map(this::mapBookOverallInfo)
                .collect(Collectors.toList());

        return new ResponseEntity<>(allBookOverallInfo, HttpStatus.OK);
    }

    private BookOverallInfo mapBookOverallInfo(Book book) {
        return new BookOverallInfo.BookOverallInfoBuilder()
                .book_id(book.getBook_id())
                .title(book.getTitle())
                .author(book.getAuthor())
                .category(book.getCategory())
                .items(book.getItems())
                .stockItemsCount((int) book.getBookItems().stream().filter(bookItem -> bookItem.getStatus().equals(STOCK)).count())
                .borrowedItemsCount((int) book.getBookItems().stream().filter(bookItem -> bookItem.getStatus().equals(BORROWED)).count())
                .reservedItemsCount((int) book.getBookItems().stream().filter(bookItem -> bookItem.getStatus().equals(RESERVED)).count())
                .build();
    }

    @GetMapping(path = "/id")
    public @ResponseBody
    ResponseEntity<BookDetailedInfo> getBookById(@RequestParam int id) {
        return bookRepository.findById(id).map(this::mapBookDetailedInfo).orElse(ResponseEntity.noContent().build());
    }

    private ResponseEntity<BookDetailedInfo> mapBookDetailedInfo(Book book) {
        return new ResponseEntity<>(new BookDetailedInfo.BookDetailedInfoBuilder()
                .book_id(book.getBook_id())
                .title(book.getTitle())
                .author(book.getAuthor())
                .category(book.getCategory())
                .items(book.getItems())
                .stockItemsCount((int) book.getBookItems().stream().filter(bookItem -> bookItem.getStatus().equals(STOCK)).count())
                .borrowedItemsCount((int) book.getBookItems().stream().filter(bookItem -> bookItem.getStatus().equals(BORROWED)).count())
                .reservedItemsCount((int) book.getBookItems().stream().filter(bookItem -> bookItem.getStatus().equals(RESERVED)).count())
                .build(), HttpStatus.OK);
    }
}
