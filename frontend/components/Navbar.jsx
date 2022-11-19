import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    return (
        <div className="navbar bg-base sticky top-0 z-10 backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-gray-200">
            <div className="flex-1">
                <a className="btn btn-ghost text-primary normal-case text-xl">2gather</a>
            </div>
            <div className="flex-none gap-2">
                <ThemeSwitcher />
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 bg-opacity-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div> 
        </div>
    );
}