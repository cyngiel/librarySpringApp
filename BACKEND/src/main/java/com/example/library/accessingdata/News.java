package com.example.library.accessingdata;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int news_id;
    private String title;
    private String content;

    public News(String bookTitle, String bookAuthor) {
        this.title = "Nowa pozycja w Bibliotece: " + bookTitle + "!";
        this.content = "W zaspbach naszej Biblioteki jest już dostępna nowa książka: " + bookTitle + ", autor: " + bookAuthor + ". Zapraszamy do czytania :)";
    }
}
