package com.example.library.accessingdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping(path = "/user")
public class UsersController {

    @Autowired
    UsersRepository usersRepository;

    @PostMapping(path = "/signup")
    public @ResponseBody
    ResponseEntity<String> addUser(@RequestBody User user) {
        usersRepository.save(user);
        return new ResponseEntity<>("saved", HttpStatus.CREATED);
    }

    @PostMapping(path = "/login")
    public @ResponseBody
    ResponseEntity<String> loginUser(@RequestBody User user) {
        usersRepository.save(user);
        return new ResponseEntity<>("saved", HttpStatus.CREATED);
    }

}
