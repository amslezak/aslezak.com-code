const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "JSFrontmatter") {
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      query SkillPages {
        allJsFrontmatter {
          edges {
            node {
              data {
                pageSlug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allJsFrontmatter.edges.map(({ node }) => {
        if (node.data.pageSlug !== null) {
          createPage({
            path: node.data.pageSlug,
            component: path.resolve(`./src/layouts/skill.js`),
            context: {
              pageSlug: node.data.pageSlug
            }
          });
        }
      });
      resolve();
    });
  });
};
