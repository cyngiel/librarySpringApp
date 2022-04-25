package com.example.library;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingTestController {
    @GetMapping("/ping")
    String ping() {
        return "pong";
    }
}
