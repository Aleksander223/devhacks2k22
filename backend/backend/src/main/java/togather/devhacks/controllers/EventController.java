package togather.devhacks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import togather.devhacks.model.CommunityEvent;
import togather.devhacks.model.PendingEvent;
import togather.devhacks.model.UserDao;
import togather.devhacks.services.EventService;
import togather.devhacks.services.UserService;

import java.net.http.HttpResponse;
import java.util.List;

@RestController
public class EventController {
    @Autowired
    UserService userService;
    @Autowired
    EventService eventService;

    @PostMapping("/events/{email}")
    public ResponseEntity<Void> postEvent(@RequestBody CommunityEvent event, @PathVariable("email") String email) {
        var queryResponse = userService.getUserType(email);
        if (queryResponse.isEmpty() || queryResponse.get().equals(UserDao.USER_TYPE.NORMAL)){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        eventService.registerEvent(event, email);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/events/{email}")
    public ResponseEntity<List<CommunityEvent>> getEvents(@PathVariable("email") String email) {
        var events = eventService.getPendingEvents(email);
        return new ResponseEntity<>(events,HttpStatus.OK);
    }

}
