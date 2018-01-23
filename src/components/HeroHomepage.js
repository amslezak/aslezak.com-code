import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "react-emotion";
import "../css/aslezak.scss";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import { Flex, Box, Heading, Absolute, Container, Relative } from "rebass";
import XRay from "react-x-ray";

export default class componentName extends Component {
  render() {
    return (
      <Flex>
        <Box w={1}>
          <Absolute w={1} z={-1}>
            <Img
              className="homeHero-background"
              sizes={this.props.background.sizes}
              backgroundColor="#99765E"
            />
          </Absolute>
          <Relative w={1}>
            <Absolute w={1}>
              <Container w={1} align="center" mt={3}>
                <Heading pt={5} w={1}>
                  <h3>Welcome! I'm</h3>
                  <h1>Andy Slezak</h1>
                  <h2>I design & code enjoyable web apps</h2>
                </Heading>
              </Container>
            </Absolute>
            <Img className="homeHero-gear" sizes={this.props.gear.sizes} />
          </Relative>
          <Container>
            <Box w={1} />
          </Container>
        </Box>
      </Flex>
    );
  }
}
