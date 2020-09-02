import React from "react"
import mainContainer from "./main.module.scss"

export default function Main(props) {
  return (
    <div className={mainContainer.main}>
      {props.children}
    </div>
  )
}
