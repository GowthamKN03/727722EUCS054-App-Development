package com.example.demo.service;

import com.example.demo.model.Profile;
import com.example.demo.model.User;
import com.example.demo.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile getProfile(Long id) {
        return profileRepository.findById(id).orElse(null);
    }

    public Profile saveProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    @Transactional
    public Profile save(Profile profile) {
        return profileRepository.save(profile);
    }

    @Transactional
    public Profile findByUserId(Long userId) {
        return profileRepository.findByUserId(userId)
                                .orElseThrow(() -> new RuntimeException("Profile not found"));
    }

    
}
