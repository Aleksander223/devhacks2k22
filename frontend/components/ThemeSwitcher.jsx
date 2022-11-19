import React, { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitcher() {
    const [theme, setTheme] = React.useState("light");

    useEffect(() => {
        setTheme(window.localStorage.getItem("theme"));
        document.documentElement.setAttribute("data-theme", window.localStorage.getItem("theme"));
    }, []);

    const changeTheme = () => {
        if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }

    return (
        <>
            <button className="btn btn-circle btn-accent btn-sm text-white" onClick={changeTheme}>
                {theme === 'dark' ? <FiMoon /> : <FiSun />}
            </button>
        </>
    );
}