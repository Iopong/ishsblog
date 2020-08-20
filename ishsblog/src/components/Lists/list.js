import React from "react"
import { Link } from "gatsby";
import listContainer from "./list.module.scss";

export default function List(props) {
  const { header, contents, blogs } = props
  return (
    <div className={listContainer.container}>
      <h3>{header}</h3>
      { blogs ? (
        <ul>
          {blogs.map((blog, idx) => (
            <Link
              key={idx}
              to={blog.link}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: 'inherit'
              }}
            >
              {blog.title}
            </Link>
          ))}
        </ul>
      ) : (
        Array.isArray(contents) ? (
          <ul>
            {contents.map((con, idx) => (
              <li key={idx}>{con}</li>
            ))}
          </ul>
        ) : (
          <p>{contents}</p>
        )
      )}
    </div>
  )
}
