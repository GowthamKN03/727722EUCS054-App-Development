package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Ordermodel;
import com.example.demo.Repository.Orderrepo;

@Service
public class Orderservice {

        @Autowired
    public Orderrepo studentRepo;
    public String addinfo(List<Ordermodel> obj) {
        studentRepo.saveAll(obj);
        return "done";
    }
    public List<Ordermodel> getin()
    {
        return studentRepo.findAll();
    }
    public void del(int id) {
        studentRepo.deleteById(id);
    }
    public int updateinfo(Ordermodel sm) {
       Ordermodel obj = studentRepo.getReferenceById(sm.getOrder_id());
        studentRepo.save(sm);
        return obj.getOrder_id();

    }


}
