package com.inn.cafe.service;

import com.inn.cafe.POJO.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


public interface CategoryService {
     ResponseEntity<String> addNewCategory(Map<String, String> requestMap);
     ResponseEntity<List<Category>> getAllCategory(String Value);

     ResponseEntity<String> update(Map<String, String> requestMap);
}
