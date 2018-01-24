import React from "react";
import SkillItem from "./SkillItem";
import styled from "react-emotion";
import Img from "gatsby-image";
import "react-tippy/dist/tippy.css";

import IconWrapper from "../styled/IconWrapper";

import { Tooltip } from "react-tippy";
import Icon from "../styled/IconWrapper";
import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";

import { Flex, Box, Heading, Text, Container, Border, NavLink } from "rebass";
import { flex, space, width, fontSize, color } from "styled-system";
import XRay from "react-x-ray";

export default class SkillWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.logos = props.logos.edges;
    this.myImage = this.logos.filter(logo => {
      return /node/.test(logo.node.sizes.src);
    });

    this.skillItems = this.props.skillItems.map((item, index) => {
      return (
        <Flex wrap>
          <Container my={3} w={1} align="center">
            <Flex>
              <Box w={1}>
                <Heading
                  children={item.sectionTitle}
                  f={3}
                  as="h1"
                  align="left"
                />

                <Heading
                  children={item.sectionSubtitle}
                  f={1}
                  as="h2"
                  align="left"
                />
              </Box>
            </Flex>

            <Flex wrap>
              {item.sectionItems.map(item => {
                return (
                  <Box mt={1} w={[1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
                    <Icon>
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
                    <Text f={2} children={item.itemTitle} />
                  </Box>
                );
              })}
            </Flex>
          </Container>
        </Flex>
      );
    });
  }

  render() {
    return <div>{this.skillItems}</div>;
  }
}
