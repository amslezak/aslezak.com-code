import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import styled from "react-emotion";
import { ThemeProvider } from "emotion-theming";

import { Flex, Box, Heading, NavLink, Container, Absolute } from "rebass";
import XRay from "react-x-ray";
import theme from "../css/Theme";
import "../css/aslezak.scss";

export default class App extends React.Component {
  render() {
    return (
      <Flex>
        <Box w={1}>
          <Absolute z={-1} w={1}>
            <Img className="portfolio-bg" sizes={this.props.background.sizes} />
          </Absolute>

          <Container align="center">
            <Box w={1} py={2}>
              <Heading align="left">
                <Heading f={6}>WORK</Heading>
                <Heading f={3}>Projects</Heading>
              </Heading>

              <Link to={"/portfolio"}>
                <Img
                  className="portfolio-image"
                  sizes={this.props.image.sizes}
                />
              </Link>

              <NavLink>
                <Link to={"/portfolio"}>PORTFOLIO</Link>
              </NavLink>
            </Box>
          </Container>
        </Box>
      </Flex>
    );
  }
}
