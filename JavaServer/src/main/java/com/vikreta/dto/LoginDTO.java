package com.vikreta.dto;

import org.hibernate.validator.constraints.Length;

import com.vikreta.entities.UserRole;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDTO {
	private Long id;
	@NotEmpty(message = "Email can't be blank")
	@Email(message = "Invalid email format")
	private String email;
	@NotEmpty
	@Length(min = 3,max=20,message = "Invalid password length")
	private String password;
	private String role;
}
