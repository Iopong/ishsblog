import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import aboutContainer from '../styles/about.module.scss';
import SEO from "../components/seo"


export default function Home({data}) {
  console.log(data);
  return (
    <Layout>
      <SEO />
      <div className={aboutContainer.container}>
        <h3>About me</h3>
        <p>Hi, my name is Ishmael(Ish). I'm a Software Engineer
          based out of San Diego. I primarily work as a FullStack 
          Developer but currently studying DataScience out of interest. 
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          accessTime
          absolutePath
          sourceInstanceName
          name
          extension
        }
      }
    }
    siteBuildMetadata {
      id
    }
  }
`
