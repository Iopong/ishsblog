import React from "react";
import List from "./Lists/list";

export default function Details(props) {

    const header = 'Details';
    const contents = 'San Diego, United States';

    return (
        <List 
            header={header}
            contents={contents}
        />

    )
}