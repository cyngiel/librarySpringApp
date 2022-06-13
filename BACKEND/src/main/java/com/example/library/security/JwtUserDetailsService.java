package com.example.library.security;

import com.example.library.accessingdata.User;
import com.example.library.accessingdata.UserDao;
import com.example.library.accessingdata.UserDto;
import com.example.library.accessingdata.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Autowired
    private UsersRepository userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDao user = userDao.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public UserDao save(UserDto user) {
        UserDao newUser = UserDao.builder()
                .username(user.getUsername())
                .email(user.getEmail())
                .password(bcryptEncoder.encode(user.getPassword()))
                .build();

        return userDao.save(newUser);
    }
}