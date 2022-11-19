import React from "react";
import Avatar from "../../components/Avatar";
import { FiHome, FiUser, FiZap, FiBriefcase, FiClipboard, FiPhone, FiMail, FiEdit, FiHeart } from "react-icons/fi";
import KPICard from "../../components/KPICard";

const info = {
    address: "Str. Lorem Ipsum 4",
    name: "Ionel Lorem",
    member: true,
    hobbies: ["Engineering", "Football"],
    job: "Electrical engineer",
    phone: "0742424424",
    email: "test@example.com",
    communityPoints: 80
}

const UserProfile = () => {
    const [userInfo, setUserInfo] = React.useState(info);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="col-span-1 text-center flex">
                    <div><Avatar className="w-24 md:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" avatar={false} online />
                        <br />
                        <p className="text-success">Available</p>
                        <div className="badge badge-primary text-center">Member</div>
                    </div>
                    <div className="grid grid-flow-row sm:grid-flow-col gap-4 w-full">
                        <div className="ml-8 text-left">
                            <div className="text-primary text-xl font-semibold"> {userInfo.name}</div>
                            <div className="divider">About me</div>
                            <div><FiHome className="inline" /> {userInfo.address}</div>
                            <div><FiZap className="inline" /> {userInfo.hobbies.join(", ")}</div>
                            <div><FiBriefcase className="inline" /> {userInfo.job}</div>
                            <div><FiPhone className="inline" /> {userInfo.phone}</div>
                            <div><FiMail className="inline" /> {userInfo.email}</div>
                            <button className="btn btn-ghost text-accent btn-sm p-0"><FiEdit className="inline mr-2" />Edit</button>
                        </div>
                        <div className="w-1/2 sm:w-auto">
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-title">Community points</div>
                                    <div className="stat-value text-secondary">{userInfo.communityPoints}</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col md:flex-row">
                    <div className="card bg-base-100 shadow-md border-base-200 border-2 w-full">
                        <div className="card-body w-full">
                            <h2 className="card-title mx-auto text-primary">Milestones</h2>
                            <div className="divider"></div>
                            <div>
                                <div className="btn btn-sm btn-circle btn-outline border-success border-2"><FiHeart className="text-success font-black" /></div>
                                <p className="inline ml-4 text-lg">Prietenul copacilor <span className="text-accent font-semibold">lvl 3</span></p>
                                <br />
                                <progress class="progress progress-success w-full" value="45" max="100"></progress>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-span-1 mt-8">
                    <KPICard title="2Support Solutions" percent={52} text="lorem" />
                    <br />
                    <KPICard title="2Solve Activities" percent={84} text="lorem" />
                    <br />
                    <KPICard title="2GiveBack Gifts" percent={12} text="lorem" />
                    <br />
                </div>
                <div className="col-span-1 mt-8">
                    <div className="card bg-base-100 shadow-md border-base-200 border-2 w-full">
                        <div className="card-body w-full">
                            <h2 className="card-title mx-auto text-primary">Upcoming events</h2>
                            <div className="divider"></div>
                            <div>
                                <div className="badge badge-primary p-4 text-lg font-semibold">10.12.2022</div>
                                <p className="inline ml-4 text-lg">Prindem solobani</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
