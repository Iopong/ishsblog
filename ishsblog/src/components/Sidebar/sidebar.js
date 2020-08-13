import React from "react";
import sidebarContainer from "./sidebar.module.css"

export default function Sidebar(props){
    return (
        <div className={sidebarContainer.sidebar}>
            <h6>I am sidebar</h6>
        </div>
    )
}