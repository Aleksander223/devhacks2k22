import { useEffect, useState } from "react";
import ProfileForm from "../components/ProfileForm";
import Avatar from "../components/Avatar";

const UserProfile = () => {
    return (
        <div className="grid grid-flow-row md:grid-flow-col gap-4">
            <div className="col-span-1 md:col-span-2  flex flex-col md:flex-row ">
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <div className="row-span-2 col-span-2">
                        <div class="grid grid-cols-3 gap-4">
                            <div className="flex justify-center mt-12">
                                <Avatar />
                            </div>
                            <div className="col-span-2 ">
                                <ProfileForm />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-yellow-500">jos</div>
                </div>
            </div>
            <div className="col-span-1 ">
                sss
                </div>
        </div>
    );
};

export default UserProfile;
