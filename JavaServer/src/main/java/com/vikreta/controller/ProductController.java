package com.vikreta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vikreta.dao.ProductDao;
import com.vikreta.dto.ProductDTO;
import com.vikreta.dto.ProductResponseDTO;
import com.vikreta.entities.Product;
import com.vikreta.service.ProductService;


@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping("/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable Long productId) {
		System.out.println("in controller");
        return ResponseEntity.ok(productService.getProductsById(productId));
    }
	
	@PostMapping("/addProduct")
	public ResponseEntity<?> addProduct( @RequestBody ProductDTO productDTO){
		System.out.println(productDTO.toString());
		return ResponseEntity.ok(productService.addProduct(productDTO));
	}
	
	@GetMapping("/allProducts")
	public List<ProductResponseDTO> getAllProducts(){
		return productService.getAllProducts();
	}
	
	@GetMapping("/user/{userId}")
	public List<ProductResponseDTO> getAllProductsByUserId( @PathVariable Long userId){
		return productService.getProductsByUser(userId);
	}
	
	@DeleteMapping("/delete/{productId}")
	public ResponseEntity<?> deleteProductById(@PathVariable Long productId){
		
		return ResponseEntity.status(HttpStatus.OK).body(productService.deleteProductById(productId));
	}
}
