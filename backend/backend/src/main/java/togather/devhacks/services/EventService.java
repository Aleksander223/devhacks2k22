package togather.devhacks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import togather.devhacks.model.CommunityEvent;
import togather.devhacks.model.PendingEvent;
import togather.devhacks.model.UserDao;
import togather.devhacks.repository.EventRepository;
import togather.devhacks.repository.PendingEventRepository;
import togather.devhacks.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {

    @Autowired
    EventRepository eventRepository;

    @Autowired
    PendingEventRepository pendingRepository;
    @Autowired
    UserRepository userRepository;

    public void registerEvent(CommunityEvent communityEvent, String email){
        var initiator = userRepository.findByEmail(email).get();
        var communityId = initiator.getCommunityId();
        communityEvent.setCommunityId(communityId);
        communityEvent.setInitiatorId(initiator.getId());
        communityEvent = eventRepository.insert(communityEvent);
        dispatch(communityEvent,email);
    }

    public void dispatch(CommunityEvent communityEvent,String email) {
        List<UserDao> users = userRepository.findByCommunityId(communityEvent.getCommunityId());
        for (var user : users) {
            pendingRepository.insert(new PendingEvent(communityEvent.getId(), user.getEmail()));
        }
    }

    public List<CommunityEvent> getPendingEvents(String email) {
        var pendingEvents =  pendingRepository.findPendingEventByUserEmail(email);
        List<CommunityEvent> communityEvents = new ArrayList<>();
        for(var pendingEvent : pendingEvents) {
            var event = eventRepository.findById(pendingEvent.getEventId());
            event.ifPresent(communityEvents::add);
        }
        return communityEvents;
    }
}
