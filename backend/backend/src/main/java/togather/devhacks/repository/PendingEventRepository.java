package togather.devhacks.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import togather.devhacks.model.PendingEvent;

import java.util.List;
import java.util.Optional;

@Repository
public interface PendingEventRepository extends MongoRepository<PendingEvent, String> {

    List<PendingEvent> findPendingEventByUserEmail(String userEmail);
}
