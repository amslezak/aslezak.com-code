import React from "react";
import SkillItem from "./SkillItem";
import styled from "react-emotion";
import Img from "gatsby-image";
import "react-tippy/dist/tippy.css";

import { Tooltip } from "react-tippy";
import Icon from "../styled/IconWrapper";
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

export default class SkillWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.logos = props.logos.edges;
    this.myImage = this.logos.filter(logo => {
      return /node/.test(logo.node.sizes.src);
    });

    this.skillItems = this.props.skillItems.map((item, index) => {
      return (
        <ThemeProvider key={index} theme={theme}>
          <Flex wrap bg="#fff">
            <Container my={[3, 3, 3, 4]} w={1} align="center">
              <Box key={index} w={1}>
                <Flex wrap>
                  <Box mb={1} w={1}>
                    <Subhead align="left">
                      <Box>
                        <SectionHeader letterSpacing={1.25} f={3}>
                          {item.sectionTitle}
                        </SectionHeader>
                      </Box>
                      <Box mt={-1}>
                        <SectionSubHeader f={2} letterSpacing={1}>
                          {item.sectionSubtitle}
                        </SectionSubHeader>
                      </Box>
                    </Subhead>
                  </Box>
                </Flex>

                <Flex wrap>
                  {item.sectionItems.map((item, index) => {
                    return (
                      <Box key={index} w={[1 / 2, 1 / 4, 1 / 4, 1 / 5]}>
                        <Icon borderRadius={10} m={[2, 1]} p={[0, 1, 2, 0]}>
                          <Img
                            sizes={
                              this.props.logos.edges.filter(skill => {
                                let regex = new RegExp(item.itemImage);
                                let img = regex.test(skill.node.sizes.src);
                                return img;
                              })[0].node.sizes
                            }
                          />
                        </Icon>
                        <Box>
                          <Text mt={-2} f={1} children={item.itemTitle} />
                        </Box>
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </Container>
          </Flex>
        </ThemeProvider>
      );
    });
  }

  render() {
    return (
      <Flex bg="#eee">
        <Container w={1}>
          <Paper w={1} my={[4, 4, 4, 4]} borderRadius={10}>
            {this.skillItems}
          </Paper>
        </Container>
      </Flex>
    );
  }
}
