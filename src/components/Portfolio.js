import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import styled from "react-emotion";
import { ThemeProvider } from "emotion-theming";

import { Flex, Subhead, Heading, Box, Container, Absolute } from "rebass";
import XRay from "react-x-ray";
import theme from "../css/Theme";
import "../css/aslezak.scss";

import HeaderLight from "../styled/HeaderLight";
import SubHeaderLight from "../styled/SubHeaderLight";
import LinkFancyLight from "../styled/LinkFancyLight";

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex>
          <Box w={1}>
            <Absolute z={-1} w={1}>
              <Img
                className="portfolio-bg"
                sizes={this.props.background.sizes}
                backgroundColor="#99765E"
              />
            </Absolute>

            <Container align="center">
              <Box w={1} py={2}>
                <Subhead align="left">
                  <Flex column>
                    <HeaderLight letterSpacing={1} f={[5, 6]}>
                      WORK
                    </HeaderLight>
                    <SubHeaderLight letterSpacing={1} f={[2, 3]}>
                      Projects
                    </SubHeaderLight>
                  </Flex>
                </Subhead>

                <Box my={-2} px={4}>
                  <Link to={"/portfolio"}>
                    <Img
                      className="portfolio-image hvr-grow"
                      sizes={this.props.image.sizes}
                    />
                  </Link>
                </Box>

                <Box mt={[-2, -4]}>
                  <LinkFancyLight f={[2, 3]} letterSpacing={1}>
                    <Link to={"/portfolio"}>PORTFOLIO</Link>
                  </LinkFancyLight>
                </Box>
              </Box>
            </Container>
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}
