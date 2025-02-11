package com.vikreta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.vikreta.dto.LoginDTO;
import com.vikreta.dto.LoginResponse;
import com.vikreta.dto.UpdateDTO;
import com.vikreta.dto.UserDTO;
import com.vikreta.entities.User;
import com.vikreta.security.JwtUtils;
import com.vikreta.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser( @RequestBody UserDTO userDTO){
		System.out.println(userDTO.toString());
		return ResponseEntity.status(HttpStatus.CREATED).
				body(userService.registerUser(userDTO));
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signInUser( @RequestBody @Valid LoginDTO loginDTO){
		System.out.println(loginDTO.getEmail());
		return userService.signinUser(loginDTO);
	}
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserDetailsById(@PathVariable Long userId){
		System.out.println("in controller");
		return ResponseEntity.status(HttpStatus.OK).
				body(userService.getUserDetailsById(userId));
	}
	@GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
	
	@PutMapping("/update")
	public ResponseEntity<?> updateUser(@RequestBody UpdateDTO userDTO){
		System.out.println(userDTO);
		return ResponseEntity.ok(userService.updateUser(userDTO));
	}
}
