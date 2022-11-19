package togather.devhacks.repository;

import org.springframework.data.mongodb.repository.Query;
import togather.devhacks.model.UserDao;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<UserDao, String> {

    @Query("{email:'?0'}")
    Optional<UserDao> findByEmail(String email);


    Optional<UserDao> findById(String id);

    Optional<UserDao> findUserDaoById(String id);

   // @Query("{communityId:'?0'}")
    List<UserDao> findByCommunityId(String communityId);

}
