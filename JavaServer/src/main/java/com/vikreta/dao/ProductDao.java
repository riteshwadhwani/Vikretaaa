package com.vikreta.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vikreta.entities.Product;
import com.vikreta.entities.User;

public interface ProductDao extends JpaRepository<Product, Long> {

	List<Product> findBySeller(User seller);

	

}
