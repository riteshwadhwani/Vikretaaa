package com.vikreta.service;

import java.util.List;

import com.vikreta.dto.BidDTO;
import com.vikreta.dto.BidResponseDTO;
import com.vikreta.entities.Bid;

public interface BidService {

	List<Bid> getBidsByProductId(Long productId);

	List<BidResponseDTO> getBidsByUserId(Long userId);

	String placeBid(BidDTO bidDTO);

}
