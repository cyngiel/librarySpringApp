package com.example.library.accessingdata;

import lombok.Data;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int book_id;
    private String title;
    private String author;
    private String category;
    private int publish_year;
    private String publishing_house;
    private String description;
    private String catalog_number;
    private int items;
    private int available_items;
}
