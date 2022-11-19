import { useHookstate } from "@hookstate/core";
import React from "react";
import { themeState } from "../pages/_app";

export default function ThemeSwitcher() {
    const theme = useHookstate(themeState);



    return <p>Theme switch</p>
}