import React, { Component } from "react";
import Img from "gatsby-image";

export default class componentName extends Component {
  constructor(props) {
    super(props);

    console.log("layout", this.props);
    // const { background, gear } = data;

    // this.background = background;
    // this.gear = gear;
  }

  render() {
    return <div>HI</div>;
  }
}

export const query = graphql`
  query IndexQuery1 {
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
