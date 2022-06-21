package com.example.library.accessingdata;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@ToString
@Data
@Entity
public class Borrowing implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int borrowing_id;
    private String date;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserDao user;

    @ManyToOne
    @JoinColumn(name = "book_item_id", nullable = false)
    private BookItem bookItem;

}
