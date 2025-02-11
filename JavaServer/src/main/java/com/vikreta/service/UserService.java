package com.vikreta.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.vikreta.dto.ApiResponse;
import com.vikreta.dto.LoginDTO;
import com.vikreta.dto.UpdateDTO;
import com.vikreta.dto.UserDTO;
import com.vikreta.dto.UserDetailsDTO;
import com.vikreta.entities.User;

public interface UserService {
	 
	ApiResponse registerUser(UserDTO userDTO);
	
	ResponseEntity<?> signinUser(LoginDTO userDTO);

	UserDetailsDTO getUserDetailsById(Long userId);

	List<User> getAllUsers();

	ApiResponse updateUser(UpdateDTO userDTO);
}
