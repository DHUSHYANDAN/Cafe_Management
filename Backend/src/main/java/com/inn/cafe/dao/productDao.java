package com.inn.cafe.dao;

import com.inn.cafe.POJO.Product;
import com.inn.cafe.wrapper.ProductWrapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface productDao extends JpaRepository<Product, Integer> {

    List<ProductWrapper> getAllProduct();

    List<ProductWrapper> getByCategory(@Param("id") Integer id);

    ProductWrapper getProductById(@Param("id") Integer id);

    @Modifying
    @Transactional
    void updateProductStatus(@Param("status") String status, @Param("id") Integer id);

}
