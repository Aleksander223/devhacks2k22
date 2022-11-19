package togather.devhacks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import togather.devhacks.model.UserDao;
import togather.devhacks.repository.UserRepository;

import java.util.List;
import java.util.Optional;

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

    public Optional<UserDao.USER_TYPE> getUserType(String email) {
        Optional<UserDao> queryResponse = userRepository.findByEmail(email);
        UserDao.USER_TYPE userType;
        if (queryResponse.isEmpty()) {
            return Optional.empty();
        }
        userType = queryResponse.get().getType();
         return Optional.ofNullable(userType);
    }

    public List<UserDao> getAllUsers() {
        return userRepository.findAll();
    }

    public enum status {ADDED, EMAILS_EXISTS}

}
