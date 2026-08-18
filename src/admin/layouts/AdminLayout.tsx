import React from 'react'
import {Outlet} from "react-router";

export const AdminLayout = () => {
    return (
        <div className={"bg-purple-700"}>
            <h1>Admin Layout</h1>
            <Outlet></Outlet>
        </div>
    )
}
