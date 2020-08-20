import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/layout";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

/**
 * Get data from slug that isn't a string.
 * Out of the data or fields that are true
 * get html, and title. 
 */
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    } 

`
