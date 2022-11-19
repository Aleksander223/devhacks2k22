package togather.devhacks.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import togather.devhacks.model.CommunityEvent;

public interface EventRepository extends MongoRepository<CommunityEvent, String> {

}
