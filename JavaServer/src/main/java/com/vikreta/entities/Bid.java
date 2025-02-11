package com.vikreta.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "bids")
public class Bid extends BaseEntity {
	
	@Column
	private double bidAmount;

	@ManyToOne
	@JoinColumn(name = "product_id",nullable = false)
	private Product product;
	
	@ManyToOne
	@JoinColumn(name = "buyer_id",nullable = false )
	private User buyer;

}
