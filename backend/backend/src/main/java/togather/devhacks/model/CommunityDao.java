package togather.devhacks.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "communities")
@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
public class CommunityDao {
    @Field(name = "_id")
    String id;
    @Field(name= "normalUserIds")
    List<String> normalUsers;
    @Field(name= "communityAmbassadorsIds")
    List<String> communityAmbassadors;
    @Field(name= "businessIds")
    List<String> businesses;

    @Field(name = "ecoScore")
    Integer ecoScore;
    @Field(name = "civicScore")
    Integer civicScore;
    @Field(name = "relationalScore")
    Integer relationalScore;
}


