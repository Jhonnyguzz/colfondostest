package com.colfondos.app.services.impl;

import com.colfondos.app.models.User;
import com.colfondos.app.repositories.UserRepository;
import com.colfondos.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> findUser(Long document) {
        return userRepository.findById(document);
    }
}
