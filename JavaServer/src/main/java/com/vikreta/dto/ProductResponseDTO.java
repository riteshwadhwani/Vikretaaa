package com.vikreta.dto;

import com.vikreta.entities.Category;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductResponseDTO extends BaseDTO {
	
	private String productName;
	private String productDetails;
	private Double price;
	private Category category;
	
	
}
