package com.example.library.accessingdata;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Builder
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
public class UserDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;
    private String username;
    private String email;
    @JsonIgnore
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Borrowing> borrowings;

    @JsonManagedReference
    public List<Borrowing> getBorrowings(){
        return borrowings;
    }

}
