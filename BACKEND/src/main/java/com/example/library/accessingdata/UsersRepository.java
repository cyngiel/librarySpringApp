package com.example.library.accessingdata;

import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<UserDao, Integer> {
    UserDao findByUsername(String username);
}
