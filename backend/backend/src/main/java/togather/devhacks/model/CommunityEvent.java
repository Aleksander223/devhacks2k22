package togather.devhacks.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "events")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class CommunityEvent {

    enum EVENT_TYPE {
        WELLNESS, ECO, ACTIVISM
    };
    @Id
    String id;
    @Field(name = "type")
    EVENT_TYPE type;

    @Field(name = "description")
    String description;

    @Field(name = "communityId")
    String communityId;

    @Field(name = "host")
    String initiatorId;

    @Field(name = "date")
    String date;

    @Field(name = "points")
    String points;

    @Field(name = "location")
    String location;

}
