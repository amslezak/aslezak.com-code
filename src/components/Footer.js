import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import ContactForm from "../components/ContactForm";
import "../css/aslezak.scss";
import { Element } from "react-scroll";

import XRay from "react-x-ray";
// Styled Components
import {
  Flex,
  Subhead,
  Box,
  Heading,
  NavLink,
  Container,
  Absolute
} from "rebass";
import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import HeaderLight from "../styled/HeaderLight";
import SubHeaderLight from "../styled/SubHeaderLight";

export default class Footer extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex>
          <Box w={1}>
            <Absolute z={-1} w={1}>
              <Img
                sizes={this.props.background.sizes}
                className="footer-background"
                backgroundColor="#99765E"
              />
            </Absolute>
            <Element name="contact" />
            <Container align="center">
              <Box w={1} py={2}>
                <Flex>
                  <Subhead align="left">
                    <HeaderLight align="left" f={[5, 6]}>
                      <Box>CONTACT</Box>
                    </HeaderLight>
                    <SubHeaderLight letterSpacing={1} f={[2, 3]}>
                      <Box>Message</Box>
                    </SubHeaderLight>
                  </Subhead>
                </Flex>
                <Flex wrap>
                  <Box w={[1, 1 / 2]} m="auto">
                    <ContactForm />
                  </Box>
                  <Box m="auto" w={[null, 1 / 2, 1 / 2, 1 / 2]}>
                    <Img sizes={this.props.image.sizes} />
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
