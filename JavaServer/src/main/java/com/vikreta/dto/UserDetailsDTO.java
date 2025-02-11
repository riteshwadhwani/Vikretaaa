package com.vikreta.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDetailsDTO extends BaseDTO {
	
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String contactDetails;
}
