package com.vikreta.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "products")
@ToString(callSuper = true)
public class Product extends BaseEntity {
	@Column(name = "product_name")
	private String productName;
	@Column(name = "product_details")
	private String productDetails;
	@Column(name = "price")
	private Double price;
	@Column(name = "category")
	private Category category;
	@Column(name = "status")
	private Status status;
	
	@Column(name="available")
	private boolean available = true;
	
	@ManyToOne
	@JoinColumn(name = "seller_id",nullable = false)
	private User seller;
	
	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
	
	private List<Bid> bids = new ArrayList<>();
}
