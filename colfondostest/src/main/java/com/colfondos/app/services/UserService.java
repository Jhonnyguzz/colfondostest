package com.colfondos.app.services;

import com.colfondos.app.models.User;

import java.util.Optional;

public interface UserService {

    User saveUser(User user);

    Optional<User> findUser(Long document);

}
