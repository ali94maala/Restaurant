package com.spring.restaurant.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends CategoryOrder {


    @Column(name = "price")
    private int price;
    @Column(name = "img")
    private String img;
    @Column(name = "description")
    private String description;


    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;





}
