import React from "react";
import { Outlet } from "react-router-dom";
import Editframe from "../components/frame/Editframe";
export default function Root() {
    return (
        <div>
            <Editframe />
            <Outlet />
        </div>
    );
}
