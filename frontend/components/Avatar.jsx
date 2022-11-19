const Avatar = ({className, avatar = true, online}) => {
    return (
        // <div className=" ">
        //     <div className="avatar online">
        //         <div className={`${className} rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}>
        //             <img src="https://placeimg.com/192/192/people" />
        //         </div>
        //     </div>
        // </div>
        <label tabIndex={0} className={`${avatar ? "btn btn-ghost btn-circle avatar" : "avatar"} ${online === false ? 'offline' : online === true ? 'online' : ''}`}>
            <div className={`${className} rounded-full`}>
                <img src="https://placeimg.com/512/512/people" />
            </div>
        </label>
    );
};

export default Avatar;