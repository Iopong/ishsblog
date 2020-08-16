import React from "react";
import sidebarContainer from "./sidebar.module.scss";
import Details from '../details';
import Skills from '../skills';
import Blogs from '../blogs';

export default function Sidebar(props){
    return (
        <div className={sidebarContainer.sidebar}>
            <Details />
            <Skills />
            <Blogs />
        </div>
    )
}