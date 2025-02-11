package com.vikreta.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vikreta.dao.ProductDao;
import com.vikreta.dao.UserDao;
import com.vikreta.dto.ApiResponse;
import com.vikreta.dto.ProductDTO;
import com.vikreta.dto.ProductResponseDTO;
import com.vikreta.entities.Product;
import com.vikreta.entities.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<ProductResponseDTO> getAllProducts() {
		return productDao.findAll().stream()
				.filter((product)-> product.isAvailable() == true)
				.map((product)-> modelMapper.map(product,ProductResponseDTO.class))
				.collect(Collectors.toList());
	}
	
	@Override
	public ProductResponseDTO getProductsById(Long productId) {
		try {
			Product product = productDao.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
			ProductResponseDTO productDto = modelMapper.map(product, ProductResponseDTO.class);
			return productDto;
		} catch (RuntimeException e) {
			System.out.println(e.getMessage());
		}
		return null;
	}

	@Override
	public List<ProductResponseDTO> getProductsByUser(Long userId) {
		
		User user = userDao.findById(userId).orElseThrow(() -> new RuntimeException("Product not found"));
		return productDao.findBySeller(user).stream()
				.filter((product)-> product.isAvailable() == true)
				.map((product) -> modelMapper.map(product,ProductResponseDTO.class ))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addProduct(ProductDTO productDTO) {
		try {
			Product product = modelMapper.map(productDTO, Product.class);
			User user = userDao.findByEmail(productDTO.getEmail()).orElseThrow(() -> new RuntimeException("User Not Found!!"));
			product.setSeller(user);
			productDao.save(product);
			return new ApiResponse("Product Added!!",true);
		} catch (Exception e) {
			return new ApiResponse("Not Added!!",false);
		}
	}

	@Override
	public ApiResponse deleteProductById(Long productId) {
		try {
			Product product = productDao.findById(productId).orElseThrow(() -> new RuntimeException("Product Not Found!!"));
			product.setAvailable(false);
			return new ApiResponse("Product Deleted!!",true);
		} catch (Exception e) {
			return new ApiResponse("Not Delete!!",false);
		}
		
	}
	
	

}
