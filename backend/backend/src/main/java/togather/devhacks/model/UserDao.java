package togather.devhacks.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.aggregation.ConvertOperators;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "users")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDao {

    public enum USER_TYPE {
        NORMAL, BUSINESS, AMBASSADOR
    }

    @Id
    public String id;
    @Field(name = "phoneNumber")
    public String phoneNumber;

    @Field(name = "address")
    public String address;

    @Field(name = "type")
    USER_TYPE type;
    @Field(name = "email")
    @Indexed(unique = true)
    public String email;
    @Field(name = "firstName")
    public String firstName;
    @Field(name = "lastName")
    public String lastName;
    @Field(name = "hobbies")
    public String[] hobbies;
    @Field(name = "services")
    public String[] services;
    @Field(name = "pictureId")
    public String pictureId;

    @Field(name = "communityId")
    public String communityId;

    public UserDao(String phoneNumber, String email, String firstName, String lastName) {
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
