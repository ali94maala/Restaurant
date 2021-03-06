package com.spring.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
@Table(name = "category")

public class Category extends CategoryOrder{

    @Column(name = "categoryLogo")
    private String logo;

    @JsonIgnore
     @OneToMany(mappedBy = "category")
     private Set<Order> orders;

    }
