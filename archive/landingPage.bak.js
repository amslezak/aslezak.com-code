import React from "react";
import Link from "gatsby-link";
import NavBar from "../components/NavBar";
import "./bootstrap.css";

export default class IndexPage extends React.Component {
  constructor({ children, data }) {
    super(props);
  }

  render() {
    return <div>Hi</div>;
  }
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// export default class LandingPage extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.pageData = this.props.data.allJsFrontmatter.edges[0].node.data;
//   }

//   render() {
//     return <div>HI</div>;
//   }
// }
