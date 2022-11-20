import { RiLeafLine } from "react-icons/ri";
import { TbTemperature } from "react-icons/tb"
import { FiUser, FiUsers, FiMap, FiCalendar, FiFlag, FiFileText } from "react-icons/fi";
import Avatar from "../../components/Avatar";

const event = {
    name: "Event name",
    host: "Lorem ipselescu",
    location: "Pe deal",
    date: "10.09.2022",
    communityPoints: 300,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ante justo. Integer suscipit, neque quis dapibus ultrices, elit ligula porttitor nisi, a dapibus purus mi et eros. Quisque eleifend fermentum sapien id euismod. Suspendisse ut aliquam massa. Morbi feugiat diam at est facilisis commodo. Maecenas eu lacus a nulla malesuada blandit. Cras rutrum elit eget mollis gravida. In sagittis interdum volutpat. Nullam mattis libero tellus, vel pellentesque sem aliquet ut. Ut et eleifend nulla. Duis vel ligula at augue volutpat sagittis id a erat. Maecenas lacus sem, fringilla sed sollicitudin at, gravida vel justo. Curabitur eleifend, metus et blandit tristique, justo nibh pretium quam, eu dignissim tortor mi eget lacus.",
    participants: ["Test testescu", "Ion lorem"],
    civicActivism: true,
    eco: true,
    wellness: false,
    sponsors: [
        "https://placeimg.com/512/512/tech",
        "https://placeimg.com/512/512/arch",
        "https://placeimg.com/512/512/tech",
    ]
}

export default function EventPage() {
    return (
        <>
            <h2 className="text-3xl text-center pt-4 pb-8 text-primary font-semibold">{event.name}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="col-span-1 flex flex-row">
                    <div className="mx-auto card bg-base-100 shadow-md border-base-200 border-2 w-full py-4 px-8 gap-2">
                        <p className="text-xl"><FiUser className="inline" /> Host: <span className="text-primary font-semibold">{event.host}</span></p>
                        <div className="form-control mt-2 inline">
                            <label className="align-middle cursor-pointer">
                                <input type="checkbox" checked={event.civicActivism} className="checkbox checkbox-primary" />
                            </label>
                            <p className="inline ml-4 text-xl">Civic activism</p>
                        </div>
                        <div className="form-control mt-2 inline">
                            <label className="align-middle cursor-pointer">
                                <input type="checkbox" checked={event.eco} className="checkbox checkbox-primary" />
                            </label>
                            <p className="inline ml-4 text-xl">Eco</p>
                        </div>
                        <div className="form-control mt-2 inline">
                            <label className="align-middle cursor-pointer">
                                <input type="checkbox" checked={event.wellness} className="checkbox checkbox-primary" />
                            </label>
                            <p className="inline ml-4 text-xl">Wellness</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 text-center flex flex-row">
                    <div className="mx-auto text-left card bg-base-100 shadow-md border-base-200 border-2 w-full py-4 px-8 gap-2">
                        <p className="text-xl"><FiMap className="inline" /> Location: <span className="text-primary font-semibold">{event.location}</span></p>
                        <p className="text-xl"><FiCalendar className="inline" /> Date: <span className="text-primary font-semibold">{event.date}</span></p>
                        <p className="text-xl"><FiFlag className="inline" /> Community points: <span className="text-accent font-semibold">{event.communityPoints}</span></p>
                        <button className="btn btn-primary mt-4">Join!</button>
                    </div>
                </div>
                <div className="col-span-1 flex flex-row">
                    <div className="mx-auto card bg-base-100 shadow-md border-base-200 border-2 w-full py-4 px-8 gap-2">
                        <p className="text-xl"><FiUsers className="inline" /> <span className="text-primary">Participants</span></p>
                        <ul>
                            {event.participants.map(person => {
                                return <li className="text-lg">{person}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col-span-1 flex flex-row">
                    <div className="mx-auto card bg-base-100 shadow-md border-base-200 border-2 w-full py-4 px-8 gap-2">
                        <p className="text-xl"><FiFileText className="inline" /> <span className="text-primary">Description</span></p>
                        <p className="text-justify">{event.description}</p>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2 flex flex-row justify-evenly mt-4">
                    {event.sponsors.map(sponsor => {
                        return <Avatar className="w-24 md:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" avatar={false} img={sponsor} />;
                    })}
                </div>
            </div>
        </>
    );
}