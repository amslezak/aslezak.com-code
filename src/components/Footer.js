import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import ContactForm from "../components/ContactForm";
import "../css/aslezak.scss";
import { Element } from "react-scroll";

import XRay from "react-x-ray";
// Styled Components
import { Flex, Box, Heading, NavLink, Container, Absolute } from "rebass";
import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";

export default class Footer extends React.Component {
  render() {
    return (
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
          <Container my={3} align="center">
            <Box w={1} py={2}>
              <Box>
                <Heading align="left">
                  <h1>CONTACT</h1>
                  <h2> Message</h2>
                </Heading>
              </Box>
              <Flex align="center">
                <Box w={3 / 4}>
                  <ContactForm />
                </Box>
                <Box m="auto" w={400}>
                  <Img sizes={this.props.image.sizes} />
                </Box>
              </Flex>
            </Box>
          </Container>
        </Box>
      </Flex>
    );
  }
}
