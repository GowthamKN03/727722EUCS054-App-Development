package com.example.demo.controller;

import com.example.demo.model.Checkout;
import com.example.demo.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;

    @PostMapping
    public ResponseEntity<Checkout> createCheckout(@RequestBody Checkout checkout) {
        Checkout savedCheckout = checkoutService.saveCheckout(checkout);
        return ResponseEntity.ok(savedCheckout);
    }
}