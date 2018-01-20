import React, { Component } from "react";
import styled from "react-emotion";
import HeroHomepage from "../components/HeroHomepage";
import About from "../components/About";
import Work from "../components/Work";
import Quote from "../components/Quote";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import FooterSub from "../components/FooterSub";

class HomePage extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default HomePage;

export const query = graphql`
  query HomePageQuery {
    background: imageSharp(id: { regex: "/heroImg.jpg/" }) {
      sizes(maxWidth: 1800, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    gear: imageSharp(id: { regex: "/gear.png/" }) {
      sizes(maxWidth: 2560, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    bgWood: imageSharp(id: { regex: "/background-wood.jpg/" }) {
      sizes(maxWidth: 2560, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    workDesign: imageSharp(id: { regex: "/work/design/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    workCode: imageSharp(id: { regex: "/work/code/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    workCloud: imageSharp(id: { regex: "/work/cloud/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    workIoT: imageSharp(id: { regex: "/work/iot/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    portfolio: imageSharp(id: { regex: "/heroPortfolio2/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    footer: imageSharp(id: { regex: "/footer/typewriter.png/" }) {
      sizes(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    socialTwitter: imageSharp(id: { regex: "/footer/logoTwitter/" }) {
      sizes(maxWidth: 128, quality: 95) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    socialGithub: imageSharp(id: { regex: "/footer/logoGithub/" }) {
      sizes(maxWidth: 128, quality: 95) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    socialCodewars: imageSharp(id: { regex: "/footer/logoCodewars/" }) {
      sizes(maxWidth: 128, quality: 95) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }

    logoSignature: imageSharp(id: { regex: "/logoSignature/" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
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
