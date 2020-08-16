import React from "react"
import listContainer from "./list.module.scss"

export default function List(props) {
  const { header, contents } = props
  return (
    <div className={listContainer.container}>
      <h3>{header}</h3>
      {Array.isArray(contents) ? (
        <ul>
          {contents.map((con, idx) => (
            <li key={idx}>{con}</li>
          ))}
        </ul>
      ) : (
        <p>{contents}</p>
      )}
    </div>
  )
}
