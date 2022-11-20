package togather.devhacks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import togather.devhacks.model.UserDao;
import togather.devhacks.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    MongoTemplate mongoTemplate;
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

    public boolean setImgId(String userId, String imgId){
        var optuser = userRepository.findById(userId);
        if (optuser.isEmpty()){
            return false;
        }
        UserDao user = optuser.get();
        user.setPictureId(imgId);
        userRepository.save(user);
        return true;
    }

    public Optional<UserDao> getUser(String userId) {
        return userRepository.findById(userId);
    }

    public enum status {ADDED, EMAILS_EXISTS}

}
