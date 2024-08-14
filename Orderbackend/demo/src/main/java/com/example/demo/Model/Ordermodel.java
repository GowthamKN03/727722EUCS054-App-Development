package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Data
@Entity
public class Ordermodel {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private int order_id;
      private String productname;
      private String price;
      private int customer_id;
      private String orderdate;
      private String ordershipdate;
      private String shipaddress;

      

      
}
