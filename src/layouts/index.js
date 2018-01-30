import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import NavBar from "../components/NavBar";
import { Flex, Box, Provider, Container } from "rebass";

import XRay from "react-x-ray";
export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
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
        <Flex column>
          <Box w={1}>
            <NavBar logo={this.props.data.logoAslezak} />
            {this.props.children()}
          </Box>
        </Flex>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query NavBarQuery {
    logoAslezak: imageSharp(id: { regex: "/logo_aslezak15.png/g" }) {
      sizes(maxWidth: 480) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
  }
`;
