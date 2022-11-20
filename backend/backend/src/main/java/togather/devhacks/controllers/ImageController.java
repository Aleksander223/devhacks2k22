package togather.devhacks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import togather.devhacks.model.UserDao;
import togather.devhacks.services.ImageService;
import togather.devhacks.services.UserService;

import java.io.IOException;
import java.io.InputStream;

@RestController
public class ImageController {

    private static final String DEFAULT_IMG = "default profile";
    @Autowired
    ImageService imageService;

    @Autowired
    UserService userService;

    @PostMapping(value = "/profilepic/{userid}",
    consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Void> uploadProfile(@RequestPart(name = "file") MultipartFile imgfile, @PathVariable("userid") String userid) {
        InputStream imgStream = null;
        try {
            imgStream = imgfile.getInputStream();
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        String imgId = imageService.storeImage(imgStream);
        userService.setImgId(userid, imgId);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping(value = "/profilepic/{userid}")
    public ResponseEntity<InputStreamResource> getProfileImage(@PathVariable(name = "userid")String userId) {
        var useropt = userService.getUser(userId);
        if(useropt.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        UserDao user = useropt.get();
        String imgId;
        if (user.getPictureId() == null){
            imgId = DEFAULT_IMG;
        }
        else {
            imgId = user.getPictureId();
        }
        GridFsResource file;
        InputStream inputStream;
        long length;
        try {
            file = imageService.getImage(imgId);
            if (file == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            inputStream = file.getInputStream();
            length = file.contentLength();
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return ResponseEntity.ok()
                .contentLength(length)
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(new InputStreamResource(inputStream));
    }
}
