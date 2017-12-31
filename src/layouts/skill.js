import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import SkillWrapper from "../components/SkillWrapper";
import HeroHeader from "../components/HeroHeader";
import HeroOverview from "../components/HeroOverview";
import About from "../components/About";
import backgroundWood from "../images/background-wood.jpg";

const Hero = styled.div`
  padding: 100px 0;
  background-image: url(${backgroundWood});

  @media (max-width: 700px) {
  }
`;

const Overview = styled.div`
  background: #fafafa;
  padding: 50px 0;
`;

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
        <Hero>
          <HeroHeader
            title={this.pageData.pageTitle}
            subtitle={this.pageData.pageSubtitle}
            image={this.props.data.heroCode}
          />
        </Hero>
        <Overview>
          <HeroOverview
            title={this.pageData.headerTitle}
            subtitle={this.pageData.headerBody}
          />
        </Overview>
        <SkillWrapper
          logos={this.props.data.logos}
          skillItems={this.pageData.pageSections}
        />
        <About />
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
            error
          }
        }
      }
    }
    heroCode: imageSharp(id: { regex: "/heroCode.png/" }) {
      sizes(maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    logos: allImageSharp(filter: { id: { regex: "/skills/code/items/" } }) {
      edges {
        node {
          sizes(
            maxWidth: 480
            quality: 80
            traceSVG: { background: "#f2f8f3", color: "#d6ebd9" }
          ) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    }
  }
`;
