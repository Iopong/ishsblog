import React from "react";
import List from "./Lists/list";


export default function Skills(props) {

    const header = 'Skills'
    const contents = [
        'JavaScript(ES6)',
        'ReactJs/Redux, AngularJS', 
        'HTML5, SCSS, Canva',
        'Python/Flask',
        'NodeJS, Java',
        'Postgres, MongoDB',
        'AWS',
    ]

    return (
        <List 
            header={header}
            contents={contents}
        />
    )
}