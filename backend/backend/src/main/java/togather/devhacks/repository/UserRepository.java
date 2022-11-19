package togather.devhacks.repository;

import togather.devhacks.model.UserDao;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<UserDao, String> {

    List<UserDao> findByEmail(String email);

    List<UserDao> findAll();

    List<UserDao> findByCommunityId();

}
