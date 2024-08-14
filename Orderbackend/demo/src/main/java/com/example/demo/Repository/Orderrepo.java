package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Ordermodel;

public interface Orderrepo extends JpaRepository<Ordermodel,Integer>{
    
} 