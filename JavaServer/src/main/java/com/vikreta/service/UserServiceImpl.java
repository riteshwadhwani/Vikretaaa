package com.vikreta.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.vikreta.custom_exceptions.ApiException;
import com.vikreta.dao.UserDao;
import com.vikreta.dto.ApiResponse;
import com.vikreta.dto.LoginDTO;
import com.vikreta.dto.LoginResponse;
import com.vikreta.dto.UpdateDTO;
import com.vikreta.dto.UserDTO;
import com.vikreta.dto.UserDetailsDTO;
import com.vikreta.entities.User;
import com.vikreta.security.JwtUtils;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;
	
	@Autowired 
	private JwtUtils jwtUtils;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private AuthenticationManager authMgr;

	@Override
	public ApiResponse registerUser(UserDTO userDTO) {
		try {
			User user = modelMapper.map(userDTO, User.class);
			
			if(userDao.existsByEmail(userDTO.getEmail())) {
				throw new ApiException("Email already exists !!!");
			}
			user.setPassword(encoder.encode(user.getPassword()));
			userDao.save(user);
			System.out.println("done");
			return new ApiResponse("SignUp Successfull",true);
		} catch (Exception e) {
			return new ApiResponse(e.getMessage(),false);
		}
	}

	@Override
	public  ResponseEntity<?>  signinUser(LoginDTO userDTO) {
		try {
			User user = userDao.findByEmail(userDTO.getEmail()).orElseThrow(()-> new RuntimeException("User Not Found"));
			
			UsernamePasswordAuthenticationToken token = 
					new UsernamePasswordAuthenticationToken(userDTO.getEmail(),
							userDTO.getPassword());
			Authentication verifiedToken = authMgr.authenticate(token);
			 
			LoginResponse resp = new LoginResponse
					(user.getId(), user.getFirstName(), jwtUtils.generateJwtToken(verifiedToken), "Successful Auth!!!!",user.getRole().toString(),true);
			return ResponseEntity.status(HttpStatus.CREATED).body(resp);
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("Unauthorized User",false));
		}
	}

	@Override
	public UserDetailsDTO getUserDetailsById(Long userId) {
		User user =  userDao.findById(userId)
				.orElseThrow(() -> new RuntimeException("User not found"));
		
		return modelMapper.map(user, UserDetailsDTO.class);
		
	}

	@Override
	public List<User> getAllUsers() {
		return userDao.findAll();
	}

	@Override
	public ApiResponse updateUser(UpdateDTO userDTO) {
		try {
			User user = userDao.findById(userDTO.getId()).orElseThrow(()-> new RuntimeException("User Not Found"));
			user.setEmail(userDTO.getEmail());
			user.setFirstName(userDTO.getFirstName());
			return new ApiResponse("user Updated!!",true);
		} catch (Exception e) {
			return new ApiResponse(e.getMessage(),false);
		}
	}

	

}
