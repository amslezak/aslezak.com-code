import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  Border,
  NavLink,
  ButtonOutline
} from "rebass";
import XRay from "react-x-ray";

export default class HeroOverview extends React.Component {
  render() {
    return (
      <Flex bg="#fff" align="center">
        <Container>
          <Box my={3}>
            <Heading f={4} my={1}>
              {this.props.title}
            </Heading>
            <Text my={1} f={2}>
              {this.props.body}
            </Text>

            <Link to="more" smooth={true} duration={500} offset={-25}>
              <ButtonOutline children="Learn More" my={2} />
            </Link>
            <Element name="more" />
          </Box>
        </Container>
      </Flex>
    );
  }
}
