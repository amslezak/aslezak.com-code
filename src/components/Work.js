import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import styled from "react-emotion";
import { ThemeProvider } from "emotion-theming";

import theme from "../css/Theme";
import { Flex, Box, Heading, Text, Container, Border, Absolute } from "rebass";
import XRay from "react-x-ray";

import HeaderLight from "../styled/HeaderLight";
import SubHeaderLight from "../styled/SubHeaderLight";
import LinkFancyLight from "../styled/LinkFancyLight";

export default class Work extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex wrap>
          <Box w={1}>
            <Absolute w={1} z={-1}>
              <Img
                backgroundColor="#99765E"
                className="work-background"
                sizes={this.props.background.sizes}
              />
              <Img
                backgroundColor="#99765E"
                className="work-background"
                sizes={this.props.background.sizes}
              />
            </Absolute>

            <Container align="center">
              <Box w={1} py={2}>
                <Flex wrap>
                  <Box w={1}>
                    <Heading align="left">
                      <Flex column>
                        <Box>
                          <HeaderLight f={6}>Skills</HeaderLight>
                        </Box>
                        <Box>
                          <SubHeaderLight letterSpacing={1} f={3}>
                            Capabilities
                          </SubHeaderLight>
                        </Box>
                      </Flex>
                    </Heading>
                  </Box>

                  <Box w={[1 / 2]}>
                    <Link to={"/design"}>
                      <Img
                        className="work-image"
                        sizes={this.props.design.sizes}
                      />
                    </Link>
                    <LinkFancyLight f={[1, 3]} letterSpacing={2 * 0.75}>
                      <Link to={"/design"}>Design</Link>
                    </LinkFancyLight>
                  </Box>

                  <Box w={[1 / 2]}>
                    <Link to={"/code"}>
                      <Img
                        className="work-image"
                        sizes={this.props.code.sizes}
                      />
                    </Link>
                    <LinkFancyLight f={[1, 3]} letterSpacing={2 * 0.75}>
                      <Link to={"/code"}>Code</Link>
                    </LinkFancyLight>
                  </Box>

                  <Box w={[1 / 2]}>
                    <Link to={"/cloud"}>
                      <Img
                        className="work-image"
                        sizes={this.props.cloud.sizes}
                      />
                    </Link>

                    <LinkFancyLight f={[1, 3]} letterSpacing={2 * 0.75}>
                      <Link to={"/cloud"}>Cloud</Link>
                    </LinkFancyLight>
                  </Box>

                  <Box w={[1 / 2]}>
                    <Link to={"/iot"}>
                      <Img
                        className="work-image"
                        sizes={this.props.iot.sizes}
                      />
                    </Link>

                    <LinkFancyLight f={[1, 3]} letterSpacing={2 * 0.75}>
                      <Link to={"/iot"}>IoT</Link>
                    </LinkFancyLight>
                  </Box>
                </Flex>
              </Box>
            </Container>
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}
