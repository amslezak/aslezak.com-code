import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "react-emotion";

const Hero = styled.div`
  background-image: url(${props => props.bg})
  background-size: cover;
  background-repeat: no-repeat;
`;

export default class componentName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hero bg="/static/background-wood-d9eb61e10cd6961b3d388a2caafa5e63-d60e4.jpg">
          <Img sizes={this.props.background} fadeIn />
        </Hero>
      </div>
    );
  }
}

// <Img sizes={this.background.sizes} fadeIn />
//         //{" "}

// constructor({ data }) {
//   super({ data });

//   const { background, gear } = data;

//   this.background = background;
//   this.gear = gear;
//   console.log(this.gear.sizes.srcSet);
//   console.log(this.background);
