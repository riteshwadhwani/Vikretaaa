package com.vikreta.dto;

import com.vikreta.entities.Category;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class ProductDTO {
	@NotBlank(message="Category should be provided!!")
	private Category category;
	@NotBlank(message = "Product Name required")
	private String productName;
	private Double price;
	private String productDetails;
	@NotBlank(message = "Email is required")
	private String email;
	
}
