import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "flexboxgrid2/flexboxgrid2.css";

export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Andy Slezak"
          meta={[
            { name: "description", content: "Andy Slezak" },
            {
              name: "keywords",
              content:
                "webapps, react, developer, fullstack, graphql, iot, aws, amazon, cloud"
            }
          ]}
        />
        <div>
          <NavBar logo={this.props.data.logoAslezak} />
          {this.props.children()}
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query NavBarQuery {
    logoAslezak: imageSharp(id: { regex: "/logo_aslezak.png/" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`;
