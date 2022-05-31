package com.example.library.accessingdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/book")
public class BookController {
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private BookItemRepository bookItemRepository;

    @PostMapping(path = "/add")
    public @ResponseBody
    ResponseEntity<String> addNewBook(@RequestBody Book book) {
        bookRepository.save(book);
        return new ResponseEntity<>("saved", HttpStatus.OK);
    }

    @PostMapping(path = "/add/item")
    public @ResponseBody
    ResponseEntity<String> addNewBookItem(@RequestBody BookItem bookItem) {
        bookItemRepository.save(bookItem);
        return new ResponseEntity<>("saved", HttpStatus.OK);
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    ResponseEntity<Iterable<Book>> getAllBooks() {
        Iterable<Book> allBooks = bookRepository.findAll();
        return new ResponseEntity<>(allBooks, HttpStatus.OK);
    }

    @GetMapping(path = "/id")
    public @ResponseBody
    ResponseEntity<Book> getBookById(@RequestParam int id) {
        return bookRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.noContent().build());
    }
}
