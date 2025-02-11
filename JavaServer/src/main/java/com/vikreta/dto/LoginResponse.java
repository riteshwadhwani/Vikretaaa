package com.vikreta.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
	private Long id;
	private String firstName;
	private String jwt;
	private String message;
	private String role;
	private boolean success;
}