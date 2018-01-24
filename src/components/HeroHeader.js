import React from "react";
import Img from "gatsby-image";
import styled from "react-emotion";
import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  Border,
  NavLink,
  Absolute
} from "rebass";
import { flex, space, width, fontSize, color } from "styled-system";
import XRay from "react-x-ray";
import "../css/aslezak.scss";

export default class HeroHeader extends React.Component {
  render() {
    return (
      <Flex>
        <Absolute z={-1} w={1}>
          <Img
            className="skill-background"
            sizes={this.props.background.sizes}
          />
        </Absolute>

        <Container w={1} my={3}>
          <Flex align="center">
            <Box width={1 / 2}>
              <Heading f={6} children={this.props.title} />
              <Heading f={3} children={this.props.subtitle} />
            </Box>
            <Box width={1 / 2}>
              <Img
                className="skill-image"
                sizes={
                  this.props.logos.edges.filter(item => {
                    let re = new RegExp(this.props.heroImage);
                    return re.test(item.node.sizes.src);
                  })[0].node.sizes
                }
              />
            </Box>
          </Flex>
        </Container>
      </Flex>
    );
  }
}
