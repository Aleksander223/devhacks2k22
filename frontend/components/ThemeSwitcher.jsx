import { useHookstate } from "@hookstate/core";
import React from "react";
import { themeState } from "../pages/_app";
import { FiMoon } from "react-icons/fi";

export default function ThemeSwitcher() {
    const theme = useHookstate(themeState);

    return (
        <>
            <button className="btn btn-square btn-accent">
                <FiMoon/>
            </button>
        </>
    );
}