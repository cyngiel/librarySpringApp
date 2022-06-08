package com.example.library.accessingdata;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Builder
@Entity
public class BookDetailedInfo implements Serializable {
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
    private int stockItemsCount;
    private int borrowedItemsCount;
    private int reservedItemsCount;

}
