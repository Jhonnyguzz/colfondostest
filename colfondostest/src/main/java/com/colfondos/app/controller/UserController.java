package com.colfondos.app.controller;

import com.colfondos.app.models.Log;
import com.colfondos.app.models.User;
import com.colfondos.app.services.LogService;
import com.colfondos.app.services.UserService;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import org.apache.logging.log4j.Logger;

@RestController
@RequestMapping("/v1")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class UserController {

    private UserService userService;
    private LogService logService;

    private static final Logger LOG = LogManager.getLogger("UserController");

    @Autowired
    public UserController(UserService userService, LogService logService) {
        this.userService = userService;
        this.logService = logService;
    }

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user) {

        Optional<User> possibleUser = userService.findUser(user.getDocument());
        if(possibleUser.isPresent()) {
            possibleUser.get().setCellphone(user.getCellphone());
            possibleUser.get().setEmail(user.getEmail());
            possibleUser.get().setTypeDocument(user.getTypeDocument());
            LOG.info("User " + possibleUser.get() + " updated!");

            CompletableFuture.runAsync(() -> {
                logService.saveLog(new Log(String.valueOf(Instant.now().getEpochSecond()), LocalDateTime.now(), "INFO", "UPDATE "+ possibleUser.get()));
            });

            return ResponseEntity.ok(userService.saveUser(possibleUser.get()));
        }
        LOG.info("User " + user + " saved!");
        CompletableFuture.runAsync(() -> {
            logService.saveLog(new Log(String.valueOf(Instant.now().getEpochSecond()), LocalDateTime.now(), "INFO", "CREATE "+ user));
        });
        return ResponseEntity.ok(userService.saveUser(user));
    }
}
