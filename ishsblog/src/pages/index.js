import React from "react";
import Main from '../components/Main/main';
import Sidebar from '../components/Sidebar/sidebar'
import pageContainer from '../styles/page.module.css'

export default function Home() {
  return (
    <div className={pageContainer.container}>
      <Main />
      <Sidebar />
    </div>
  )
}
