package com.example.library.accessingdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller // This means that this class is a Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/book")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody
    String addNewUser (@RequestParam String title, @RequestParam String author, @RequestParam String category, @RequestParam int publish_year, @RequestParam String publishing_house, @RequestParam String description, @RequestParam String catalog_number, @RequestParam int items) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        Book b = new Book();
        b.setTitle(title);
        b.setAuthor(author);
        b.setCategory(category);
        b.setPublish_year(publish_year);
        b.setDescription(description);
        b.setPublishing_house(publishing_house);
        b.setCatalog_number(catalog_number);
        b.setItems(items);
        b.setAvailable_items(items);
        bookRepository.save(b);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping(path="/id")
    public @ResponseBody ResponseEntity<Book> getBookById(@RequestParam int id) {
        return bookRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.noContent().build());
    }
}
