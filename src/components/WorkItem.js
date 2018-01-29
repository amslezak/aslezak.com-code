import React, { Component } from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import { Tooltip } from "react-tippy";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import { Flex, Box, Heading, Text, Container, Border, NavLink } from "rebass";
import { flex, space, width, fontSize, color } from "styled-system";
import XRay from "react-x-ray";
import SectionHeader from "../styled/SectionHeader";
import SectionSubHeader from "../styled/SectionSubHeader";
import Paper from "../styled/Paper";

class componentName extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex bg="#eee">
          <Container w={1} align="center">
            <Paper w={1} my={[4, 4, 4, 4]} borderRadius={10}>
              <Flex wrap bg="#fff">
                <Container my={[3, 3, 3, 4]} w={1}>
                  <Box w={1} mb={1}>
                    <Heading align="left">
                      <SectionHeader f={[3, 4]} letterSpacing={1.25}>
                        <Box>Gallery</Box>
                      </SectionHeader>
                      <SectionSubHeader f={[2, 3]} letterSpacing={1}>
                        <Box>Work</Box>
                      </SectionSubHeader>
                    </Heading>

                    <Flex wrap>
                      {this.props.data.map(item => {
                        let re = new RegExp(item.workImage);
                        return (
                          <Box w={1} mt={[3, 1]} mx={[0, 2]} p={[0, 3]}>
                            <Heading
                              f={[2, 3, 3, 4]}
                              my={[1, 2]}
                              style={{ textTransform: "uppercase" }}
                            >
                              <Box>{item.workTitle}</Box>
                            </Heading>
                            <Text color="#7d7d7d" f={[0, 2]} my={[1, 2]}>
                              {item.workSubtitle}
                            </Text>

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
            </Paper>
          </Container>
        </Flex>
      </ThemeProvider>
    );
  }
}

export default componentName;
