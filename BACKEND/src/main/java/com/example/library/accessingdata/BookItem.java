package com.example.library.accessingdata;

import lombok.Data;

import javax.persistence.*;

import static com.example.library.accessingdata.BookItemStatus.STOCK;

@Data
@Entity
public class BookItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int book_item_id;

    @Enumerated(EnumType.STRING)
    private BookItemStatus status = STOCK;
    private int book_id;
}
