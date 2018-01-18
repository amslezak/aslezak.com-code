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
import "animate.css";
import "../css/aslezak.scss";

const Hero = styled.div``;

const Overview = styled.div``;

const WorkWrapper = styled.div`
  background-color: #e0e0e0;
  padding: 50px 0;
`;

export default class SkillPage extends React.Component {
  constructor(props) {
    super(props);

    this.pageData = this.props.data.allJsFrontmatter.edges[0].node.data;
  }

  render() {
    return (
      <div>
        <Hero>
          <Img
            className="skill-background"
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
        </Hero>
        <Overview>
          <HeroOverview
            title={this.pageData.headerTitle}
            body={this.pageData.headerBody}
          />
        </Overview>

        <WorkWrapper items={this.pageData}>
          <WorkItems
            data={this.pageData.pageSections}
            portfolio={this.props.data.portfolio}
          />
        </WorkWrapper>

        <About logo={this.props.data.logoSignature} />
        <Footer
          background={this.props.data.bgWood}
          image={this.props.data.footerTypewriter}
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
    bgWood: imageSharp(id: { regex: "/background-wood.jpg/" }) {
      sizes(maxWidth: 2560, quality: 90) {
        ...GatsbyImageSharpSizes
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
    portfolio: allImageSharp(filter: { id: { regex: "/portfolio/" } }) {
      edges {
        node {
          sizes(maxWidth: 960, quality: 90) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;
