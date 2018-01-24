import React, { Component } from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import { Tooltip } from "react-tippy";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import { Flex, Box, Heading, Text, Container, Border, NavLink } from "rebass";
import { flex, space, width, fontSize, color } from "styled-system";
import XRay from "react-x-ray";

class componentName extends Component {
  render() {
    return (
      <Flex>
        <Container my={3} w={1} align="center">
          <Box w={1}>
            <Heading children="Gallery" f={3} as="h1" align="left" />
            <Heading children="Work" f={1} as="h2" align="left" />

            <Flex wrap>
              {this.props.data.map(item => {
                let re = new RegExp(item.workImage);
                return (
                  <Box mx="auto" w={3 / 4} m={2} p={1}>
                    <Heading children={item.workTitle} as="h1" m={2} />
                    <Img
                      sizes={
                        this.props.portfolio.edges.filter(item => {
                          return re.test(item.node.sizes.src);
                        })[0].node.sizes
                      }
                    />
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </Container>
      </Flex>
    );
  }
}

export default componentName;
