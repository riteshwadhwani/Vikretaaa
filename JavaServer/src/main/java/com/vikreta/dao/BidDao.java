package com.vikreta.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vikreta.entities.Bid;
import com.vikreta.entities.Product;
import com.vikreta.entities.User;

public interface BidDao extends JpaRepository<Bid, Long> {

	 List<Bid> findAllByProduct(Product product);

	 List<Bid> findAllByBuyer(User user);

}
