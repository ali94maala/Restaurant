package com.spring.restaurant.controller;

import com.spring.restaurant.model.Order;
import com.spring.restaurant.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @GetMapping("/api/allorders")
    public List<Order> allOrders () {
        return orderService.getAllOrders();
    }

    //"http://localhost:8080/api/category?id={value}"
    @GetMapping("/api/category")
    public List<Order> getAllOrderByCategoryId(@RequestParam Long id){
        return orderService.getOrderByIdCategories(id);
    }
}
