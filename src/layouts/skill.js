import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import SkillWrapper from "../components/SkillWrapper";
import HeroHeader from "../components/HeroHeader";
import HeroOverview from "../components/HeroOverview";
import About from "../components/About";
import backgroundWood from "../images/background-wood.jpg";
import Footer from "../components/Footer";
import FooterSub from "../components/FooterSub";

import { flex, space, width, fontSize, color } from "styled-system";
import { Flex, Box, Heading, NavLink, Container, Absolute } from "rebass";
import XRay from "react-x-ray";
import "../css/aslezak.scss";

export default class SkillPage extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.data) {
      this.pageData = this.props.data.allJsFrontmatter.edges[0].node.data;
    }
  }

  render() {
    return (
      <Flex column>
        <Flex align="center">
          <Box width={1}>
            <HeroHeader
              title={this.pageData.pageTitle}
              subtitle={this.pageData.pageSubtitle}
              image={this.props.data.heroCode}
              heroImage={this.pageData.headerImage}
              logos={this.props.data.logos}
              background={this.props.data.bgWood}
            />
          </Box>
        </Flex>
        <Box>
          <HeroOverview
            title={this.pageData.headerTitle}
            body={this.pageData.headerBody}
            button={this.pageData.buttonText}
            subTitle={this.pageData.headerSubTitle}
          />
        </Box>
        <Box>
          <SkillWrapper
            logos={this.props.data.logos}
            skillItems={this.pageData.pageSections}
          />
        </Box>
        <Box>
          <About logo={this.props.data.logoSignature} />
        </Box>
        <Box>
          <Footer
            background={this.props.data.bgWood}
            image={this.props.data.footerTypewriter}
          />
        </Box>
        <Box>
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

export const query = graphql`
  query SkillQuery($pageSlug: String) {
    allJsFrontmatter(filter: { data: { pageSlug: { eq: $pageSlug } } }) {
      edges {
        node {
          data {
            pageTitle
            pageSubtitle
            pageSlug
            headerTitle
            headerBody
            headerImage
            headerSubTitle
            buttonText
            pageSections {
              sectionTitle
              sectionSubtitle
              sectionItems {
                itemTitle
                itemSubtitle
                itemImage
              }
            }
          }
        }
      }
    }
    heroCode: imageSharp(id: { regex: "/heroCode.png/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    logos: allImageSharp(filter: { id: { regex: "/skills/" } }) {
      edges {
        node {
          sizes(maxWidth: 480, quality: 80) {
            ...GatsbyImageSharpSizes_withWebp_noBase64
          }
        }
      }
    }
    logoSignature: imageSharp(id: { regex: "/logoSignature/" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    footerTypewriter: imageSharp(id: { regex: "footer/typewriter/" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    bgWood: imageSharp(id: { regex: "/background-wood.jpg/" }) {
      sizes(maxWidth: 2560, quality: 90) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    social: imageSharp(id: { regex: "/footer/social/" }) {
      sizes(maxWidth: 359) {
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
  }
`;
