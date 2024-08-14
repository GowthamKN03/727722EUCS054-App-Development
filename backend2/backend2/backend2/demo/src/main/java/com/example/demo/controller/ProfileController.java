package com.example.demo.controller;

import com.example.demo.model.Profile;
import com.example.demo.model.User;
import com.example.demo.service.ProfileService;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profiles")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/{id}")
    public Profile getProfile(@PathVariable Long id) {
        return profileService.getProfile(id);
    }

    @PostMapping("/savProfile")
    public Profile saveProfile(@RequestBody Profile profile) {
        return profileService.saveProfile(profile);
    }

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> createProfile(@RequestBody Profile profile, @RequestParam Long userId) {
        User user = userService.findById(userId);
        profile.setUser(user);
        profileService.save(profile);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Profile> getProfileByUserId(@PathVariable Long userId) {
        Profile profile = profileService.findByUserId(userId);
        return ResponseEntity.ok(profile);
    }
}

