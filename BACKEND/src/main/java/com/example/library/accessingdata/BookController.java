package com.example.library.accessingdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // This means that this class is a Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/book")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @PostMapping(path = "/add") // Map ONLY POST Requests
    public @ResponseBody
    ResponseEntity<String> addNewBook(@RequestBody Book book) {
        bookRepository.save(book);
        return new ResponseEntity<>("saved", HttpStatus.OK);
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    ResponseEntity<Iterable<Book> >getAllBooks() {
        Iterable<Book> allBooks = bookRepository.findAll();
        return new ResponseEntity<>(allBooks, HttpStatus.OK);
    }
}
