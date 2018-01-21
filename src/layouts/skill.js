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

import { Flex, Box, Grid } from "grid-styled";
import { flex, space, width, fontSize, color } from "styled-system";
import "../css/aslezak.scss";

const SkillBorder = styled.div`
  background-color: #e0e0e0;
  padding: 50px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 25px 0;
  }

  @media (max-width: 375px) {
    padding: 1px 0;
    margin: 0;
  }
`;

const Overview = styled.div``;

export default class SkillPage extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.data) {
      this.pageData = this.props.data.allJsFrontmatter.edges[0].node.data;
    }
  }

  render() {
    return (
      <div>
        <Flex column>
          <Flex align="center">
            <Box width={1}>
              <Img
                className="skill-background"
                css={{ zIndex: -1 }}
                style={{ position: "absolute" }}
                sizes={this.props.data.bgWood.sizes}
              />
              <HeroHeader
                title={this.pageData.pageTitle}
                subtitle={this.pageData.pageSubtitle}
                image={this.props.data.heroCode}
                heroImage={this.pageData.headerImage}
                logos={this.props.data.logos}
              />
            </Box>
          </Flex>
          <Box>
            <Overview>
              <HeroOverview
                title={this.pageData.headerTitle}
                body={this.pageData.headerBody}
              />
            </Overview>
          </Box>
          <Box>
            <SkillBorder>
              <SkillWrapper
                logos={this.props.data.logos}
                skillItems={this.pageData.pageSections}
              />
            </SkillBorder>
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
      </div>
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
        ...GatsbyImageSharpSizes
      }
    }
    logos: allImageSharp(filter: { id: { regex: "/skills/" } }) {
      edges {
        node {
          sizes(maxWidth: 480, quality: 80) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
    logoSignature: imageSharp(id: { regex: "/logoSignature/" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes
      }
    }
    footerTypewriter: imageSharp(id: { regex: "footer/typewriter/" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes
      }
    }
    bgWood: imageSharp(id: { regex: "/background-wood.jpg/" }) {
      sizes(maxWidth: 2560, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    social: imageSharp(id: { regex: "/footer/social/" }) {
      sizes(maxWidth: 359) {
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
  }
`;
