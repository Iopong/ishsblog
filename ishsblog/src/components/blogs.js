import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import List from "./Lists/list"

export default function Blogs(props) {
  const header = "Posts"
  const contents = "Coming soon... "

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  )

  console.log(data)
  return <List header={header} contents={contents} />
}
