import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "flexboxgrid2/flexboxgrid2.css";

export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Andy Slezak"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <div>
          <NavBar />
          {this.props.children()}
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query IndexQuery3 {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 125, height: 125, rotate: 180) {
              src
            }
          }
        }
      }
    }
    background: imageSharp(id: { regex: "/background-wood.jpg/" }) {
      sizes(toFormat: JPG) {
        ...GatsbyImageSharpSizes
      }
    }
    gear: imageSharp(id: { regex: "/gear.png/" }) {
      sizes(maxWidth: 1440) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
