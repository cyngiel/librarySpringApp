package com.example.library.accessingdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/news")
public class NewsController {
    @Autowired
    private NewsRepository newsRepository;

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<News> getAllNews() {
        return newsRepository.findAll();
    }

    @PostMapping(path = "/add")
    public @ResponseBody
    ResponseEntity<String> addNewNews(@RequestBody News news) {
        newsRepository.save(news);
        return new ResponseEntity<>("saved", HttpStatus.OK);
    }

}
