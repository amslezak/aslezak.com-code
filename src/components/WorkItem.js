import React, { Component } from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import { Tooltip } from "react-tippy";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import {
  Flex,
  Subhead,
  Box,
  Heading,
  Text,
  Container,
  Border,
  NavLink
} from "rebass";
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
                    <Subhead align="left">
                      <SectionHeader f={[3, 4]} letterSpacing={1.25}>
                        <Box>Gallery</Box>
                      </SectionHeader>
                      <SectionSubHeader f={[2, 3]} letterSpacing={1}>
                        <Box>Work</Box>
                      </SectionSubHeader>
                    </Subhead>

                    <Flex wrap>
                      {this.props.data.map((item, index) => {
                        let re = new RegExp(item.workImage);
                        return (
                          <Box
                            key={index}
                            w={1}
                            mt={[3, 1]}
                            mx={[0, 2]}
                            p={[0, 3]}
                          >
                            <Subhead
                              f={[2, 3, 3, 4]}
                              my={[1, 2]}
                              style={{ textTransform: "uppercase" }}
                            >
                              <Box>{item.workTitle}</Box>
                            </Subhead>
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
