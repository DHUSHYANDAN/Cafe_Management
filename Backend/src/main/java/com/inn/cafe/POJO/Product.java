package com.inn.cafe.POJO;

import javax.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;



@NamedQuery(name = "Product.getAllProduct", query = "select new com.inn.cafe.wrapper.ProductWrapper(u.id , u.name , u.description , u.price , u.category.id , u.category.name , u.status) from Product u")

@NamedQuery(name = "Product.updateProductStatus" , query = "update Product u set u.status =:status where u.id =:id")

@NamedQuery(name = "Product.getByCategory", query = "select new com.inn.cafe.wrapper.ProductWrapper(u.id , u.name , u.description , u.price , u.category.id , u.category.name , u.status  ) from Product u where u.category.id=:id and u.status='true'")

@NamedQuery(name = "Product.getProductById", query = "select new com.inn.cafe.wrapper.ProductWrapper(u.id , u.name , u.description , u.price) from Product u where u.id=:id")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@DynamicUpdate
@DynamicInsert
@Table(name = "product")
public class Product implements Serializable {
    private static final long serialVersionUID = 123456L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_fk", nullable = false)
    private Category category;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Integer price;

    @Column(name = "status")
    private String status;

}
