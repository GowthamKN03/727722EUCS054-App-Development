// package com.example.demo.service;
// import org.springframework.stereotype.Service;
// import com.example.demo.model.User;
// import com.example.demo.model.UserRoleEnum;
// import com.example.demo.repository.UserRepository;
// import com.example.demo.utils.AuthResponse;
// import com.example.demo.utils.LoginRequest;
// import com.example.demo.utils.RegisterRequest;
// import lombok.RequiredArgsConstructor;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.crypto.password.PasswordEncoder;
// @Service
// @RequiredArgsConstructor
// public class AuthService {
//     private final PasswordEncoder passwordEncoder;
//     private final UserRepository userRepository;
//     private final JwtService jwtService;
//     private final RefreshTokenService refreshTokenService;
//     private final AuthenticationManager authenticationManager;

//     public AuthResponse register(RegisterRequest registerRequest) {

//         UserRoleEnum role = UserRoleEnum.USER;
        
//         // Check if the user should be an admin
//         if (registerRequest.getEmail().equals("admin@gmail.com") && registerRequest.getPassword().equals("admin")) {
//             role = UserRoleEnum.ADMIN;
//         }

//         var user = User.builder()
//                 .firstName(registerRequest.getFirstName())
//                 .lastName(registerRequest.getLastName())
//                 .email(registerRequest.getEmail())
//                 .password(passwordEncoder.encode(registerRequest.getPassword()))
//                 .role(role)
//                 .build();

//         User savedUser = userRepository.save(user);
//         var accessToken = jwtService.generateToken(savedUser);
//         var refreshToken = refreshTokenService.createRefreshToken(savedUser.getEmail());

//         return AuthResponse.builder()
//                 .accessToken(accessToken)
//                 .refreshToken(refreshToken.getRefreshToken())
//                 .build();
//     }
//     public AuthResponse login(LoginRequest loginRequest) {
//         authenticationManager.authenticate(
//                 new UsernamePasswordAuthenticationToken(
//                         loginRequest.getEmail(),
//                         loginRequest.getPassword()
//                         )
//         );

//         var user = userRepository.findByEmail(loginRequest.getEmail());
//                                 // .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
//         var accessToken = jwtService.generateToken(user);
//         var refreshToken = refreshTokenService.createRefreshToken(loginRequest.getEmail());

//         return AuthResponse.builder()
//                 .accessToken(accessToken)
//                 .refreshToken(refreshToken.getRefreshToken())
//                 .build();
//     }
// }
package com.example.demo.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.User;
import com.example.demo.model.UserRoleEnum;
import com.example.demo.repository.UserRepository;
import com.example.demo.utils.AuthResponse;
import com.example.demo.utils.LoginRequest;
import com.example.demo.utils.RegisterRequest;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
@Service
@RequiredArgsConstructor
public class AuthService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final RefreshTokenService refreshTokenService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest registerRequest) {

        UserRoleEnum role = UserRoleEnum.USER;
        
        // Check if the user should be an admin
        if (registerRequest.getEmail().equals("admin@gmail.com") && registerRequest.getPassword().equals("admin")) {
            role = UserRoleEnum.ADMIN;
        }

        var user = User.builder()
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(role)
                .build();

        User savedUser = userRepository.save(user);
        var accessToken = jwtService.generateToken(savedUser);
        var refreshToken = refreshTokenService.createRefreshToken(savedUser.getEmail());

        return AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build();
    }
    public AuthResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                        )
        );

        var user = userRepository.findByEmail(loginRequest.getEmail());
                                // .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
        var accessToken = jwtService.generateToken(user);
        var refreshToken = refreshTokenService.createRefreshToken(loginRequest.getEmail());

        return AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build();
    }
    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
   
    @Transactional
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}