const ProfileForm = () => {
    return (
        <form>
            <h1>Personal data</h1>
            <input
                type="text"
                placeholder="Firstname"
                className="input input-bordered input-primary w-full max-w-xs mt-5"
            />
            <input
                type="text"
                placeholder="Lastname"
                className="input input-bordered input-primary w-full max-w-xs mt-5"
            />
            {/* <input
                                            type="text"
                                             placeholder="Hobbys"
                                            className="input input-bordered input-primary w-full max-w-xs mt-5"
                                        /> */}
            <input
                type="text"
                placeholder="Job"
                className="input input-bordered input-primary w-full max-w-xs mt-5"
            />
            <textarea
                className="textarea  input-bordered textarea-primary w-full max-w-xs mt-5"
                placeholder="Description"
                rows="2"
            ></textarea>
        </form>
    );
};

export default ProfileForm;