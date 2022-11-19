package togather.devhacks.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document
@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
public class CommunityDao {
    @Field(name= "normalUserIds")
    List<String> normalUsers;
    @Field(name= "communityAmbassadorsIds")
    List<String> communityAmbassadors;
    @Field(name= "communityAmbassadorsIds")
    List<String> businesses;

    Integer ecoScore;
    Integer civicScore;
    Integer relationalScore;
}


