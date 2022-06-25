package com.example.library.accessingdata;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@ToString
@Data
@Builder
@Entity
public class BookItemExtended implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int book_id;
    private String title;
    private String author;
    private String category;
    private int publish_year;
    private String publishing_house;
    private String catalog_number;
    private int items;
    private String email;

    private int book_item_id;
    private String status;
}
