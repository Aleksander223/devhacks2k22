package togather.devhacks.controllers;

import togather.devhacks.model.UserDao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import togather.devhacks.services.UserService;

import java.util.List;

@RestController
@AllArgsConstructor
@Setter
@Getter
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/user/create")
    public ResponseEntity<Void> createUser(@RequestBody UserDao user) {
        if (user.lastName == null ||
                user.firstName == null ||
                user.email == null ||
                user.phoneNumber == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        UserService.status status = userService.createUser(user);
        if (status == UserService.status.ADDED) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDao>> getAllUsers() {
        var users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
