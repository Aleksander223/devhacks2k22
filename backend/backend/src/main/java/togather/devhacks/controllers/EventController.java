package togather.devhacks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import togather.devhacks.model.CommunityEvent;
import togather.devhacks.services.EventService;
import togather.devhacks.services.UserService;

import java.net.http.HttpResponse;

@RestController
public class EventController {
    @Autowired
    UserService userService;
    @Autowired
    EventService eventService;

    @PostMapping("/events/{userId}")
    public ResponseEntity<Void> postEvent(CommunityEvent event, @PathVariable("userId") String id) {
        var queryResponse = userService.getUserType(id);
        if (queryResponse.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        eventService.registerEvent(event, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @GetMapping("/events/{userId}")
//    public ResponseEntity<Void> getEvents(@PathVariable("userId") String id) {
//    }

}
