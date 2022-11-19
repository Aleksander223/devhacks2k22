package togather.devhacks.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class CommunityEvent {

    enum EVENT_TYPE {
        WELLNESS, GOING_OUT, ACTIVISM
    };

    @Field(name = "type")
    EVENT_TYPE type;

    @Field(name = "description")
    String description;

    @Field(name = "communityId")
    String communityId;

}
