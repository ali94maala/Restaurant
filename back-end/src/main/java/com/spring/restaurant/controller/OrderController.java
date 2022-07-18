package com.spring.restaurant.controller;

import com.spring.restaurant.model.Order;
import com.spring.restaurant.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/")
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @GetMapping("allorders")
    public List<Order> allOrders () {
        return orderService.getAllOrders();
    }

    //"http://localhost:8080/api/category?id={value}"
    @GetMapping("category")
    public List<Order> getAllOrderByCategoryId(@RequestParam Long id){
        return orderService.getOrderByIdCategories(id);
    }

    //"http://localhost:8080/api/orderkey?word=key"
    @GetMapping("orderkey")
    public List<Order> getOrderByKey(@RequestParam String word){
        return orderService.getOrderByKey(word);
    }
}
