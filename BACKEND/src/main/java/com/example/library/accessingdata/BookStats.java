package com.example.library.accessingdata;

import lombok.Data;

@Data
public class BookStats {
    int stock;
    int borrowed;
    int reserved;

    public BookStats(int stock, int borrowed, int reserved) {
        this.stock = stock;
        this.borrowed = borrowed;
        this.reserved = reserved;
    }
}
