import React from "react";
import SkillWrapper from "../components/SkillWrapper";
import HeroHeader from "../components/HeroHeader";
import HeroOverview from "../components/HeroOverview";
import About from "../components/About";

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
        <HeroHeader
          HI
          FROM
          SKILL
          TEMPLATE
          title={this.pageData.pageTitle || ""}
          subtitle={this.pageData.pageSubtitle || ""}
          image={this.pageData.headerImage || ""}
        />
        <HeroOverview
          title={this.pageData.headerTitle || ""}
          subtitle={this.pageData.headerBody || ""}
        />

        <SkillWrapper skillItems={this.pageData.pageSections || ""} />
        <About />
      </div>
    );
  }
}

export const query = graphql`
  query SkillQuery2($pageSlug: String!) {
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
  }
`;
