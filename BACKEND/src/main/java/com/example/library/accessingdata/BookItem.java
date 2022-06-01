package com.example.library.accessingdata;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
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
//    private int book_id;

    @ManyToOne
    @JoinColumn(name="book_id", nullable=false)
    private Book book;

    @JsonBackReference
    public Book getBook() {
        return book;
    }

}
