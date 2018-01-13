import React, { Component } from "react";
import styled from "react-emotion";
import HeroHomepage from "../components/HeroHomepage";
import About from "../components/About";
import Work from "../components/Work";
import Quote from "../components/Quote";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import FooterSub from "../components/FooterSub";

const FlexContainer = styled.div`
  border-style: solid;
  display: flex;
  flex-flow: column nowrap;
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
    console.log("HOME INDEX", props.data);
  }

  render() {
    return (
      <div>
        <HeroHomepage background={this.props.data.background} />

        <About logo={this.props.data.logoSignature} />
        <Work
          background={this.props.data.bgWood}
          design={this.props.data.workDesign}
          code={this.props.data.workCode}
          cloud={this.props.data.workCloud}
          iot={this.props.data.workIoT}
        />
        <Quote quotes={this.props.data.quotes.edges[0].node.data.quotes[0]} />
        <Portfolio image={this.props.data.portfolio} />
        <Quote quotes={this.props.data.quotes.edges[0].node.data.quotes[1]} />
        <Footer image={this.props.data.footer} />
        <FooterSub
          twitter={this.props.data.socialTwitter}
          github={this.props.data.socialGithub}
          codewars={this.props.data.socialCodewars}
        />
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
      sizes(maxWidth: 1800, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    gear: imageSharp(id: { regex: "/gear.png/" }) {
      sizes(maxWidth: 2560, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    bgWood: imageSharp(id: { regex: "/background-wood.jpg/" }) {
      sizes(maxWidth: 2560, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    workDesign: imageSharp(id: { regex: "/work/design/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    workCode: imageSharp(id: { regex: "/work/code/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    workCloud: imageSharp(id: { regex: "/work/cloud/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    workIoT: imageSharp(id: { regex: "/work/iot/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    portfolio: imageSharp(id: { regex: "/heroPortfolio2/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    footer: imageSharp(id: { regex: "/footer/typewriter/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    socialTwitter: imageSharp(id: { regex: "/footer/logoTwitter/" }) {
      sizes(maxWidth: 128, quality: 95) {
        ...GatsbyImageSharpSizes
      }
    }
    socialGithub: imageSharp(id: { regex: "/footer/logoGithub/" }) {
      sizes(maxWidth: 128, quality: 95) {
        ...GatsbyImageSharpSizes
      }
    }
    socialCodewars: imageSharp(id: { regex: "/footer/logoCodewars/" }) {
      sizes(maxWidth: 128, quality: 95) {
        ...GatsbyImageSharpSizes
      }
    }

    logoSignature: imageSharp(id: { regex: "/logoSignature/" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes
      }
    }
    quotes: allJsFrontmatter(filter: { id: { regex: "/quotes/" } }) {
      edges {
        node {
          id
          data {
            quotes {
              author
              quote
            }
          }
        }
      }
    }
  }
`;
