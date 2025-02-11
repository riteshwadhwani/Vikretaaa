package com.vikreta.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BidDTO {
	private double bidAmount;
    private Long productId;
    private Long buyerId;
}
