package com.vikreta.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@ToString
@Table(name = "users")
public class User extends BaseEntity {
	@Column(name = "first_name" ,length = 50)
	private String firstName;
	@Column(name = "last_name" , length = 50)
	private String lastName;
	@Column(name = "email" ,unique = true , length = 100)
	private String email;
	@Column(name = "password" , nullable = false , length =  100)
	private String password;
	@Column(name = "contact" , length = 10)
	private String contactDetails;
	@Column(name = "role")
	private UserRole role;
	@OneToMany(mappedBy = "seller",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Product> products = new ArrayList<>();
	@OneToMany(mappedBy = "buyer",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Bid> bids = new ArrayList<>();
	
}
