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

    public void registerEvent(CommunityEvent communityEvent, String initiatorId){
        eventRepository.insert(communityEvent);
        dispatch(communityEvent, initiatorId);
    }

    public void dispatch(CommunityEvent communityEvent, String initiatorId) {
        List<UserDao> users = userRepository.findByCommunityId();
        List<PendingEvent> events = new ArrayList<>();
        for (var user : users) {
            if(user.getId().equals(initiatorId))
                events.add(new PendingEvent(communityEvent.getCommunityId(), user.getId()));
        }
    }
}
