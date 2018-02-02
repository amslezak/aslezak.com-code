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
import WorkItems from "../components/WorkItem";
import "../css/aslezak.scss";

import { flex, space, width, fontSize, color } from "styled-system";
import { Flex, Box, Heading, NavLink, Container, Absolute } from "rebass";
import theme from "../css/Theme";
import XRay from "react-x-ray";
import { ThemeProvider } from "styled-components";
import SectionHeader from "../styled/SectionHeader";
import SectionSubHeader from "../styled/SectionSubHeader";
import Paper from "../styled/Paper";

const WorkWrapper = styled.div`
  background-color: #e0e0e0;
`;
export default class SkillPage extends React.Component {
  constructor(props) {
    super(props);
    this.pageData = this.props.data.allJsFrontmatter.edges[0].node.data;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex column>
          <Flex align="center">
            <Box width={1} mt={1}>
              <HeroHeader
                title={this.pageData.pageTitle}
                subtitle={this.pageData.pageSubtitle}
                image={this.props.data.headerImage}
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
            <WorkWrapper items={this.pageData}>
              <WorkItems
                data={this.pageData.pageSections}
                portfolio={this.props.data.portfolio}
              />
            </WorkWrapper>
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
      </ThemeProvider>
    );
  }
}

export const query = graphql`
  query Portfolio {
    allJsFrontmatter(filter: { data: { pageSlug: { eq: "/portfolio" } } }) {
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
              workTitle
              workSubtitle
              workImage
              workTags
            }
          }
        }
      }
    }

    heroPortfolio: imageSharp(id: { regex: "/heroPortfolio5.png/" }) {
      sizes(maxWidth: 480) {
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
    bgWood: imageSharp(id: { regex: "/background-wood.jpg/" }) {
      sizes(maxWidth: 2560, quality: 90) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
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
    portfolio: allImageSharp(filter: { id: { regex: "/portfolio/" } }) {
      edges {
        node {
          sizes(maxWidth: 480, quality: 90) {
            ...GatsbyImageSharpSizes_withWebp_noBase64
          }
        }
      }
    }
  }
`;
