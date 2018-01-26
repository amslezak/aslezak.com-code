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

import XRay from "react-x-ray";
import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  Border,
  ButtonOutline,
  ButtonCircle,
  Arrow
} from "rebass";

import HeaderDark from "../styled/HeaderDark";
import SubHeaderDark from "../styled/SubHeaderDark";
import Button from "../styled/Button";

export default class HeroOverview extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex bg="#fff" align="center" py={[2, 3, 2, 3]}>
          <Container>
            <Box my={[1, 3]}>
              <HeaderDark letterSpacing={0.75} lineHeight={2} f={[3, 4]}>
                {this.props.title}
              </HeaderDark>
              <Text my={1} f={[2, 3]}>
                {this.props.body}
              </Text>

              <Flex>
                <Box my={[3, 3, 3, 3]}>
                  <Link to="more" smooth={true} duration={500} offset={-25}>
                    <Button letterSpacing={1.25} borderRadius={4} p={[2]}>
                      Learn More
                    </Button>
                  </Link>
                </Box>
              </Flex>
              <Element name="more" />
            </Box>
          </Container>
        </Flex>
      </ThemeProvider>
    );
  }
}
