const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * Will be called by gatsby everytime a node is
 * called or updated.
 *
 * We will use each markdown file to create
 * a slug. A slug being /blog-seven etc.
 *
 * @param {} param0
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  //Add new slugs using existing mark nodes.
  //Will be added so that we can
  //Query them later as slugs using graphql
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    //In order to get the filename of the node
    //We need to traverse it with getNode()
    // const fileNode = getNode(node.parent);
    // console.log('\n', fileNode.relativePath)
    // The createFilePath handles finding the parent
    //File node and creating a slug.
    // console.log(createFilePath({node, getNode, basePath: `Posts`}));

    const slug = createFilePath({ node, getNode, basePath: `Posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
