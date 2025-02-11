package com.vikreta.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vikreta.dao.BidDao;
import com.vikreta.dao.ProductDao;
import com.vikreta.dao.UserDao;
import com.vikreta.dto.BidDTO;
import com.vikreta.dto.BidResponseDTO;
import com.vikreta.entities.Bid;
import com.vikreta.entities.Product;
import com.vikreta.entities.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BidServiceImpl implements BidService {

	@Autowired
	private BidDao bidDao;
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	@Override
	public String placeBid(BidDTO bidDTO) {
		Bid bid = modelMapper.map(bidDTO, Bid.class);
		User user = userDao.findById(bidDTO.getBuyerId()).orElseThrow(() -> new RuntimeException("User Not Found"));
		Product product = productDao.findById(bidDTO.getProductId()).orElseThrow(()-> new RuntimeException("Product Not Found"));
		bid.setBuyer(user);
		bid.setProduct(product);
		bidDao.save(bid);
		return "Bid placed successFully!!";
	}
	
	@Override
	public List<Bid> getBidsByProductId(Long productId) {
		Product product = productDao.findById(productId).orElseThrow(null);
		
		return bidDao.findAllByProduct(product);
	}

	@Override
	public List<BidResponseDTO> getBidsByUserId(Long userId) {
		User user = userDao.findById(userId).orElseThrow(null);
		 return bidDao.findAllByBuyer(user).stream().map((bid)->modelMapper.map(bid, BidResponseDTO.class))
		 .collect(Collectors.toList());
	}


}
