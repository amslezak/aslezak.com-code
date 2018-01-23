import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import styled from "react-emotion";
import { ThemeProvider } from "emotion-theming";

import theme from "../css/Theme";
import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  Border,
  NavLink,
  Absolute,
  Relative
} from "rebass";
import XRay from "react-x-ray";

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
                  <Box w={[1]}>
                    <Heading align="left">
                      <Heading f={6}>SKILLS</Heading>
                      <Heading f={3}>Capabilities</Heading>
                    </Heading>
                  </Box>

                  <Box w={[1 / 2]}>
                    <Link to={"/design"}>
                      <Img
                        className="work-image"
                        sizes={this.props.design.sizes}
                      />
                    </Link>
                    <Heading>
                      <h2>
                        <NavLink>
                          <Link to={"/design"}>Design</Link>
                        </NavLink>
                      </h2>
                    </Heading>
                  </Box>

                  <Box w={[1 / 2]}>
                    <Link to={"/code"}>
                      <Img
                        className="work-image"
                        sizes={this.props.code.sizes}
                      />
                    </Link>
                    <h2>
                      <NavLink>
                        <Link to={"/code"}>Code</Link>
                      </NavLink>
                    </h2>
                  </Box>

                  <Box w={[1 / 2]}>
                    <Link to={"/cloud"}>
                      <Img
                        className="work-image"
                        sizes={this.props.cloud.sizes}
                      />
                    </Link>
                    <Heading>
                      <NavLink>
                        <Link to={"/cloud"}>Cloud</Link>
                      </NavLink>
                    </Heading>
                  </Box>

                  <Box w={[1 / 2]}>
                    <Link to={"/iot"}>
                      <Img
                        className="work-image"
                        sizes={this.props.iot.sizes}
                      />
                    </Link>
                    <Heading>
                      <NavLink>
                        <Link to={"/iot"}>IoT</Link>
                      </NavLink>
                    </Heading>
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
