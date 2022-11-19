package togather.devhacks.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import togather.devhacks.model.PendingEvent;

public interface PendingEventRepository extends MongoRepository<PendingEvent, String> {
}
