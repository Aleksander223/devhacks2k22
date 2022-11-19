package togather.devhacks.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import togather.devhacks.model.CommunityEvent;

import java.util.Optional;

public interface EventRepository extends MongoRepository<CommunityEvent, String> {

    Optional<CommunityEvent> findById(String id);

}
