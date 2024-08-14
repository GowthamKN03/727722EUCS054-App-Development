package com.example.demo.service;

import com.example.demo.model.Checkout;
import com.example.demo.repository.CheckoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckoutService {

    @Autowired
    private CheckoutRepository checkoutRepository;

    public Checkout saveCheckout(Checkout checkout) {
        return checkoutRepository.save(checkout);
    }
}