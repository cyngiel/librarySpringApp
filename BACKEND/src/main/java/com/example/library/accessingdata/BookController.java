package com.example.library.accessingdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static com.example.library.accessingdata.BookItemStatus.*;

@RestController
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
        News news = new News();
        news.setTitle("Nowa pozycja w Bibliotece: " + book.getTitle() + "!");
        news.setContent("W zaspbach naszej Biblioteki jest już dostępna nowa książka: " + book.getTitle() + ", autor: " + book.getAuthor() + ". Zapraszamy do czytania :)");
        newsRepository.save(news);
        return new ResponseEntity<>("saved", HttpStatus.CREATED);
    }

    @PostMapping(path = "/add/item")
    public @ResponseBody
    ResponseEntity<String> addNewBookItem(@RequestParam int book_id) {
        Optional<Book> book = bookRepository.findById(book_id);

        if (!book.isPresent()) {
            return new ResponseEntity<>("book_id= " + book_id + " does not exists!", HttpStatus.NO_CONTENT);
        }
        BookItem bookItem = new BookItem();
        bookItem.setBook(book.get());
        bookItemRepository.save(bookItem);
        return new ResponseEntity<>("saved", HttpStatus.OK);
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    ResponseEntity<Iterable<BookOverallInfo>> getAllBooks() {
        Iterable<Book> allBooks = bookRepository.findAll();
        List<BookOverallInfo> allBookOverallInfo = StreamSupport
                .stream(allBooks.spliterator(), false)
                .map(this::mapBookOverallInfo)
                .collect(Collectors.toList());

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        System.out.println(username);

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
                .publish_year(book.getPublish_year())
                .description(book.getDescription())
                .stockItemsCount((int) book.getBookItems().stream().filter(bookItem -> bookItem.getStatus().equals(STOCK)).count())
                .borrowedItemsCount((int) book.getBookItems().stream().filter(bookItem -> bookItem.getStatus().equals(BORROWED)).count())
                .reservedItemsCount((int) book.getBookItems().stream().filter(bookItem -> bookItem.getStatus().equals(RESERVED)).count())
                .build(), HttpStatus.OK);
    }

    @PostMapping(path = "/reserve")
    public @ResponseBody
    ResponseEntity<String> reserveBookById(@RequestParam int id) {
        Optional<Book> book = bookRepository.findById(id);
        if (!book.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Optional<BookItem> optionalBookItem = book.get().getBookItems().stream().filter(item -> item.getStatus().equals(STOCK)).findFirst();
        if (!optionalBookItem.isPresent()) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        BookItem bookItem = optionalBookItem.get();
        bookItem.setStatus(RESERVED);
        bookItemRepository.save(bookItem);
        return new ResponseEntity<>("Updated", HttpStatus.OK);
    }

    @GetMapping(path = "/reserve/all")
    public @ResponseBody
    ResponseEntity<Iterable<BookItemExtended>> getAllReservedBooks() {
        Iterable<BookItem> allBooks = bookItemRepository.findAll();
        List<BookItemExtended> reservedBooks = StreamSupport
                .stream(allBooks.spliterator(), false)
                .filter(bookItem -> bookItem.getStatus().equals(RESERVED))
                .map(this::mapReservedBooks)
                .collect(Collectors.toList());

        return new ResponseEntity<>(reservedBooks, HttpStatus.OK);
    }

    @PostMapping(path = "/borrow")
    public @ResponseBody
    ResponseEntity<String> borrowBookById(@RequestParam int id) {
        Optional<BookItem> optionalBookItem = bookItemRepository.findById(id);
        if (!optionalBookItem.isPresent()) {
            return new ResponseEntity<>("id not found", HttpStatus.NOT_FOUND);
        }

        BookItem bookItem = optionalBookItem.get();
        bookItem.setStatus(BORROWED);
        bookItemRepository.save(bookItem);
        return new ResponseEntity<>("Updated", HttpStatus.OK);
    }

    @PostMapping(path = "/return")
    public @ResponseBody
    ResponseEntity<String> returnBookById(@RequestParam int id) {
        Optional<BookItem> optionalBookItem = bookItemRepository.findById(id);
        if (!optionalBookItem.isPresent()) {
            return new ResponseEntity<>("id not found", HttpStatus.NOT_FOUND);
        }

        BookItem bookItem = optionalBookItem.get();
        bookItem.setStatus(STOCK);
        bookItemRepository.save(bookItem);
        return new ResponseEntity<>("Updated", HttpStatus.OK);
    }

    @GetMapping(path = "/borrow/all")
    public @ResponseBody
    ResponseEntity<Iterable<BookItemExtended>> getAllBorrowedBooks() {
        Iterable<BookItem> allBooks = bookItemRepository.findAll();
        List<BookItemExtended> reservedBooks = StreamSupport
                .stream(allBooks.spliterator(), false)
                .filter(bookItem -> bookItem.getStatus().equals(BORROWED))
                .map(this::mapReservedBooks)
                .collect(Collectors.toList());

        return new ResponseEntity<>(reservedBooks, HttpStatus.OK);
    }

    private BookItemExtended mapReservedBooks(BookItem bookItem) {
        return new BookItemExtended.BookItemExtendedBuilder()
                .book_id(bookItem.getBook().getBook_id())
                .title(bookItem.getBook().getTitle())
                .author(bookItem.getBook().getAuthor())
                .category(bookItem.getBook().getCategory())
                .items(bookItem.getBook().getItems())
                .catalog_number(bookItem.getBook().getCatalog_number())
                .publish_year(bookItem.getBook().getPublish_year())
                .publishing_house(bookItem.getBook().getPublishing_house())
                .book_item_id(bookItem.getBook_item_id())
                .status(bookItem.getStatus().name())
                .build();
    }

    @DeleteMapping(path = "/delete/book")
    public @ResponseBody
    ResponseEntity<String> deleteBook(int bookId) {
        if (!bookRepository.findById(bookId).isPresent()) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        try {
            bookRepository.deleteById(bookId);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/item")
    public @ResponseBody
    ResponseEntity<String> deleteBookItem(int id) {
        Optional<BookItem> bookItem = bookItemRepository.findById(id);
        if (!bookItem.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        bookItemRepository.deleteById(bookItem.get().getBook_item_id());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
