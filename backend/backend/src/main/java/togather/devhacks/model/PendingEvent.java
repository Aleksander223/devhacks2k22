package togather.devhacks.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "pendingEvents")
@AllArgsConstructor
@Setter
@Getter
public class PendingEvent {
    @Field(name = "eventId")
    String eventId;
    @Field(name = "userId")
    String userId;
}
