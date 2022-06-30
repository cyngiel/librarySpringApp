package com.example.library.accessingdata;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@ToString
@Data
@Entity
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int book_id;
    private String title;
    private String author;
    private String category;
    private String publish_year;
    private String publishing_house;
    private String description;
    private String catalog_number;
    private int items;

    @OneToMany(mappedBy = "book")
    private List<BookItem> bookItems;

    @JsonManagedReference
    public List<BookItem> getBookItems(){
        return bookItems;
    }

}
