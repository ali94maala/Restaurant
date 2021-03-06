package com.spring.restaurant.service;

import com.spring.restaurant.deo.CategoryRepository;
import com.spring.restaurant.deo.OrderRepository;
import com.spring.restaurant.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }


    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public List<Order> getOrderByIdCategories(Long id){
        return orderRepository.findByCategoryId(id);
    }

    public List<Order> getOrderByKey(String key){
        return orderRepository.findByNameContaining(key);
    }

    public Order getOrder(long id){
        return orderRepository.findById(id).get();
    }
}
