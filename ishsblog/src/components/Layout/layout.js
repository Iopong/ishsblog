import React from "react";
import Main from '../../components/Main/main';
import Sidebar from '../../components/Sidebar/sidebar';
import layoutContainer from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={layoutContainer.container}>
      <Main>
        {children}
      </Main>
      <Sidebar />
    </div>
  )
}
