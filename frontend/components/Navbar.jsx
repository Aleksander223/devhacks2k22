import Image from "next/image";
import Avatar from "./Avatar";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    return (
        <div className="navbar bg-base sticky top-0 z-10 backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-gray-200">
            <div className="flex-1">
                <a className="text-primary normal-case text-xl ml-4 w-32"><Image src="/logo.png" alt="2gather" layout="responsive" width={3775} height={1112} sizes="70vw" priority></Image></a>
            </div>
            <div className="flex-none gap-2">
                <ThemeSwitcher />
                <div className="dropdown dropdown-end">
                    <Avatar className="w-10" />
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