package com.bittrail.controller;

import com.bittrail.dto.AuthRequest;
import com.bittrail.dto.AuthResponse;
import com.bittrail.model.User;
import com.bittrail.repository.UserRepository;
import com.bittrail.util.JWTUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JWTUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/register")
    public AuthResponse register(@RequestBody AuthRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already in use.");
        }

        String hashed = passwordEncoder.encode(request.getPassword());
        
        User user = new User(null, request.getEmail(), hashed);
        
        userRepository.save(user);

        String token = jwtUtil.generateToken(user.getEmail());

        return new AuthResponse(token);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found."));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials.");
        }

        String token = jwtUtil.generateToken(user.getEmail());
        
        return new AuthResponse(token);
    }
}