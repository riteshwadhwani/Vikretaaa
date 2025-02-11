package com.vikreta.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//DTO :  resp DTO : to send API resp from rest server ---> rest clnt
@NoArgsConstructor
@Getter
@Setter
public class ApiResponse {
	private LocalDateTime timeStamp;
	private String message;
	private boolean success;
	public ApiResponse(String message,boolean success) {
		super();
		this.message = message;
		this.success = success;
		this.timeStamp=LocalDateTime.now();
	}
	
}
