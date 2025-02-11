package com.vikreta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vikreta.dto.ApiResponse;
import com.vikreta.dto.BidDTO;
import com.vikreta.service.BidService;

@RestController
@RequestMapping("/Bids")
@CrossOrigin(origins = "http://localhost:5173")
public class BidController {

	@Autowired
	private BidService bidService;
	
	@PostMapping("/placeBid")
	public ResponseEntity<?> placeBid (@RequestBody BidDTO bidDTO){
		System.out.println("bidding" + " " +  bidDTO.getBuyerId() + " "  +  bidDTO.getProductId());
		return ResponseEntity.ok(new ApiResponse(bidService.placeBid(bidDTO),true));
	}
	
	
	@GetMapping("/{productId}")
	public ResponseEntity<?> getAllBidsByProductId(@PathVariable Long productId){
		  return ResponseEntity.ok(bidService.getBidsByProductId(productId));
	}
	
	
	@GetMapping("user/{userId}")
	public ResponseEntity<?> getBidsByUserId(@PathVariable Long userId){
		return ResponseEntity.ok(bidService.getBidsByUserId(userId));
	}
	
}
