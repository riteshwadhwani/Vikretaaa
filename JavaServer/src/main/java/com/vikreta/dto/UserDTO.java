package com.vikreta.dto;



import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.vikreta.entities.UserRole;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {
	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
	private Long id;
	@NotBlank(message = "First Name required")
	private String firstName;
	private String lastName;
	@Email(message = "Invalid Email!!!")
	private String email;
	private String contactNo;
	private String password;
	private UserRole role;

}
