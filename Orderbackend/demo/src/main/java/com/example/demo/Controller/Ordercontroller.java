package com.example.demo.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Ordermodel;
import com.example.demo.Service.Orderservice;

@RestController

public class Ordercontroller {

     @Autowired
    public Orderservice service;
    @GetMapping("/start")
    public String welcomestring()
    {
        return "welcome all";
    }

      @PostMapping("/demopost")
    public String postMethodName(@RequestBody List<Ordermodel> obj) {
       service.addinfo(obj);
        return "done";
    }

    @GetMapping("/display")
    public List<Ordermodel>tinfo()
    {
          return service.getin();
    }

      @DeleteMapping("/delete/{id}")
    public void deletion(@PathVariable int id)
    {
         service.del(id);
    }
      

    @PutMapping("/update")
    public int putMethodName(@RequestBody Ordermodel obj) {
       return service.updateinfo(obj);
    }
    

}
