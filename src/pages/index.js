import React, { Component } from "react";
import styled from "react-emotion";
import HeroHomepage from "../components/HeroHomepage";
import About from "../components/About";
import Work from "../components/Work";
import Quote from "../components/Quote";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const FlexContainer = styled.div`
border-style: solid
  display: flex;
flex-flow: column nowrap
  max-width: 960px;

  background-color: ${props => {
    return props.backgroundColor ? props.backgroundColor : "white";
  }};
  justify-content: center;
  align-items: center;
  align-content: center;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeroHomepage background={this.props.data.background.sizes} />

        <About />
        <Work />
        <Quote />
        <Portfolio />
        <Quote />
        <Footer />
      </div>
    );
  }
}

export default HomePage;

export const query = graphql`
  query IndexQuery4 {
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
    background: imageSharp(id: { regex: "/heroImg.jpg/" }) {
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
