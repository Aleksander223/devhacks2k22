package togather.devhacks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import togather.devhacks.model.UserDao;
import togather.devhacks.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public status createUser(UserDao user) {
        try {
            userRepository.insert(user);
        }catch(Exception e) {
            return status.EMAILS_EXISTS;
        }
        return status.ADDED;
    }

    public List<UserDao> getAllUsers() {
        return userRepository.findAll();
    }

    public enum status {ADDED, EMAILS_EXISTS}

}
