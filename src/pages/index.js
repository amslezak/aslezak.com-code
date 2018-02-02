import React, { Component } from "react";
import styled from "react-emotion";
import HeroHomepage from "../components/HeroHomepage";
import About from "../components/About";
import Work from "../components/Work";
import Quote from "../components/Quote";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import FooterSub from "../components/FooterSub";
import XRay from "react-x-ray";

import { Flex, Box } from "rebass";

class HomePage extends Component {
  render() {
    return (
      <Flex column>
        <Box w={1}>
          <HeroHomepage
            gear={this.props.data.gear}
            background={this.props.data.bgWood}
          />

          <About logo={this.props.data.logoSignature} />

          <Work
            background={this.props.data.bgWood}
            design={this.props.data.workDesign}
            code={this.props.data.workCode}
            cloud={this.props.data.workCloud}
            iot={this.props.data.workIoT}
          />

          <Quote quotes={this.props.data.quotes.edges[0].node.data.quotes[0]} />
          <Portfolio
            background={this.props.data.bgWood}
            image={this.props.data.portfolio}
          />
          <Quote quotes={this.props.data.quotes.edges[0].node.data.quotes[1]} />
          <Footer
            background={this.props.data.bgWood}
            image={this.props.data.footer}
          />
          <FooterSub
            twitter={this.props.data.socialTwitter}
            github={this.props.data.socialGithub}
            codewars={this.props.data.socialCodewars}
          />
        </Box>
      </Flex>
    );
  }
}

export default HomePage;

export const query = graphql`
  query HomePageQuery {
    background: imageSharp(id: { regex: "/heroImg.jpg/" }) {
      sizes(maxWidth: 1800, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
    gear: imageSharp(id: { regex: "/gear9.png/" }) {
      sizes(maxWidth: 2560, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    bgWood: imageSharp(id: { regex: "/background-wood.jpg/" }) {
      sizes(maxWidth: 2560, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    workDesign: imageSharp(id: { regex: "/design/heroDesign4.png/" }) {
      sizes(maxWidth: 480, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    workCode: imageSharp(id: { regex: "/code/heroCode2.png/" }) {
      sizes(maxWidth: 480, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    workCloud: imageSharp(id: { regex: "/cloud/heroCloud8.png/" }) {
      sizes(maxWidth: 480, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    workIoT: imageSharp(id: { regex: "/iot/heroIot5.png/" }) {
      sizes(maxWidth: 480, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    portfolio: imageSharp(id: { regex: "/heroPortfolio5.png/" }) {
      sizes(maxWidth: 480, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    footer: imageSharp(id: { regex: "/footer/typewriter10.png/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    socialTwitter: imageSharp(id: { regex: "/footer/logoTwitter/" }) {
      sizes(maxWidth: 128, quality: 95) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    socialGithub: imageSharp(id: { regex: "/footer/logoGithub/" }) {
      sizes(maxWidth: 128, quality: 95) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    socialCodewars: imageSharp(id: { regex: "/footer/logoCodewars/" }) {
      sizes(maxWidth: 128, quality: 95) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }

    logoSignature: imageSharp(id: { regex: "/logoSignature/" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
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
