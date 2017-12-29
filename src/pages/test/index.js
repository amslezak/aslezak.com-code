import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "react-emotion";

const Hero = styled.div`

  background-color: blue;
  background-image: url(${props => {
    console.log(props);
    return props.backgroundImage;
  }});
  background-size: cover
  background-repeat: no-repeat;
`;

class componentName extends Component {
  constructor({ data }) {
    super({ data });

    const { background, gear } = data;

    this.background = background;
    this.gear = gear;
    console.log(this.gear.sizes.srcSet);
    console.log(this.background);
  }

  render() {
    return (
      <div>
        <Hero backgroundImage={this.background.sizes.src}>
          <Img sizes={this.heroImg.sizes} />
        </Hero>
      </div>
    );
  }
}

export default componentName;

export const query = graphql`
  query IndexQuery {
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
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    gear: imageSharp(id: { regex: "/gear.png/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

// <Img sizes={this.background.sizes} fadeIn />
// <Img sizes={this.gear.sizes} fadeIn />
