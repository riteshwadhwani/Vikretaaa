package com.vikreta.service;

import java.util.List;

import com.vikreta.dto.ApiResponse;
import com.vikreta.dto.ProductDTO;
import com.vikreta.dto.ProductResponseDTO;
import com.vikreta.entities.Product;

public interface ProductService {

	List<ProductResponseDTO> getAllProducts();

	List<ProductResponseDTO> getProductsByUser(Long userId);

	ApiResponse addProduct(ProductDTO productDTO);

	ProductResponseDTO getProductsById(Long productId);

	ApiResponse deleteProductById(Long productId);
}
