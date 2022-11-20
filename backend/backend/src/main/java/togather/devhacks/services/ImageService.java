package togather.devhacks.services;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;

@Service
public class ImageService {
    @Autowired
    GridFsTemplate gridFsTemplate;

    public String storeImage(InputStream imginput) {
        ObjectId id = gridFsTemplate.store(imginput, "img.png");
        return id.toHexString();
    }

    public GridFsResource getImage(String imgId) throws IOException {
        var file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(imgId)));
        if (file == null)
            return null;
        return gridFsTemplate.getResource(file);
    }
}
