package com.example.library.accessingdata;

import org.springframework.data.repository.CrudRepository;

public interface BookItemRepository extends CrudRepository<BookItem, Integer> {

}
