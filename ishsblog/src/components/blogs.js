import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import List from "./Lists/list"

export default function Blogs(props) {
  const header = "Posts"
  // const contents = "Coming soon... "

  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
  //         edges {
  //           node {
  //             id
  //             excerpt
  //             frontmatter {
  //               title
  //               date
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )

  console.log(data)
  const out = data.allMarkdownRemark.edges.map(
    ({ node }) => {
      return {
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        link: node.fields.slug
      }
    }
  )
  return <List header={header} blogs={out} />
}
