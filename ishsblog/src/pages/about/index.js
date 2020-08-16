import React from "react";
import { graphql } from 'gatsby';
import Layout from '../../components/Layout/layout';
import aboutContainer from './about.module.scss';

export default function Home({data}) {
  console.log(data);
  return (
    <Layout>
      <div className={aboutContainer.container}>
        <p>Hi, my name is Ishmael(Ish). I'm a Software Engineer
          based out of San Diego. A site where I write about nothing. 
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
