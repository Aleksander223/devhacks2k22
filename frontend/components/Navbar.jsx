import Image from "next/image";
import Avatar from "./Avatar";
import ThemeSwitcher from "./ThemeSwitcher";
import { FiHome, FiMenu, FiPlusCircle, FiUsers } from "react-icons/fi";
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navbar bg-base sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-30 border-b border-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden text-2xl">
                       <FiMenu/>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        <li><Link href="/"><FiHome />Home</Link></li>
                        <li><Link href="/action"><FiPlusCircle />Add action</Link></li>
                        <li><Link href="/community"><FiUsers /> Community</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-primary normal-case text-xl w-32"><Image src="/logo.png" alt="2gather" layout="responsive" width={3775} height={1112} sizes="70vw" priority></Image></a>
            </div>
            <ul className="menu menu-horizontal navbar-center hidden lg:flex text-lg">
                <li><Link href="/"><FiHome />Home</Link></li>
                <li><Link href="/action"><FiPlusCircle />Add action</Link></li>
                <li><Link href="/community"><FiUsers /> Community</Link></li>
            </ul>
            <div className="navbar-end gap-2">
                <ThemeSwitcher />
                <div className="dropdown dropdown-end">
                    <Avatar className="w-10" />
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 bg-opacity-100 rounded-box w-52">
                        <li>
                            <Link href="/user/1" className="justify-between">
                                Profile
                            </Link>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}