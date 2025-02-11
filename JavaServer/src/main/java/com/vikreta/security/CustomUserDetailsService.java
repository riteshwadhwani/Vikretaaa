package com.vikreta.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vikreta.dao.UserDao;
import com.vikreta.entities.User;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
	// depcy
	private UserDao userEntityRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userEntityRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("Invalid Email !!!"));
		return new CustomUserDetails(user);
	}

}
