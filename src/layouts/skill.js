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
import "animate.css";

const Hero = styled.div`
  background-image: url(${backgroundWood});

  @media (max-width: 700px) {
  }
`;

const Overview = styled.div`
  margin-bottom: 75px;
`;

export default class SkillPage extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    if (this.props.data) {
      this.pageData = this.props.data.allJsFrontmatter.edges[0].node.data;
    } else {
      console.log("no props in skills");
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
            heroImage={this.pageData.headerImage}
            logos={this.props.data.logos}
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
        <About logo={this.props.data.logoSignature} />
        <Footer image={this.props.data.footerTypewriter} />
        <FooterSub image={this.props.data.social} />
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
    social: imageSharp(id: { regex: "/footer/social/" }) {
      sizes(maxWidth: 359) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
