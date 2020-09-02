import React from "react";
import List from "./Lists/list";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { LinkedinOutline } from "@styled-icons/evaicons-outline/LinkedinOutline";

export default function Blogs() {
  const header = "Links";

  const out = [
    {
      name: 'Code', 
      url: 'https://github.com/Iopong',
      component: GithubOutline
    },
    {
      name: 'Experience',
      url: 'https://www.linkedin.com/in/ishmael-opong-277ab7154/',
      component: LinkedinOutline
    }
  ];
  return (
    <List header={header}>
      <ul>
        {
          out.map((link, indx) => {
            return(
              <li key={indx}>
                <link.component size={24}/>
                <i class="fas fa-flag"></i>	
                <a href={link.url}>{link.name}</a>
              </li>
            )
          })
        }
      </ul>
    </List>
  )
}
