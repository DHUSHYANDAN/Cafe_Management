package com.inn.cafe.rest;

import com.inn.cafe.wrapper.ProductWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping(path = "/product")
public interface productRest {
    @PostMapping(path = "/add")
    public ResponseEntity<String> addNewProduct(@RequestBody Map<String, String> requestMap);

    @GetMapping(path = "/get")
    public ResponseEntity<List<ProductWrapper>> getAllProduct();

    @PostMapping(path = "/update")
    public ResponseEntity<String> update(@RequestBody(required = true) Map<String, String> requestMap);

    @PostMapping(path = "/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id);

    @GetMapping(path = "/getByCategory/{id}")
    public ResponseEntity<List<ProductWrapper>> getByCategory(@PathVariable Integer id);

    @GetMapping(path = "/getProductById/{id}")
    public ResponseEntity<ProductWrapper> getProductById(@PathVariable Integer id);

    @PostMapping(path = "/updateProductStatus")
    public ResponseEntity<String> updateProductStatus(@RequestBody(required = true) Map<String, String> requestMap);

    /*
    @PostMapping(path = "/updateProductStatus")
    public ResponseEntity<String> updateProductStatus(@RequestBody Map<String, String> requestMap);
    */
}
