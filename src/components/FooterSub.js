import React from "react";

// Gatsby
import Link from "gatsby-link";
import Img from "gatsby-image";

// Emotion
import styled from "react-emotion";
import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";

// Jxnblk
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Flex, Box, Heading, Text, Container, Border, NavLink } from "rebass";
import { Grid } from "grid-styled";
import XRay from "react-x-ray";

export default class App extends React.Component {
  render() {
    return (
      <Flex bg="#fff" column>
        <Container w={1} align="left">
          <Box my={[0, 1, 1, 1]} py={2}>
            <Grid w={75} mx={[0, 2, 2, 0]}>
              <a href="https://twitter.com/aslezak">
                <Img className="social-img" sizes={this.props.twitter.sizes} />
              </a>
            </Grid>
            <Grid w={75} mx={[0, 2, 2, 2]}>
              <a href="https://www.github.com/amslezak">
                <Img className="social-img" sizes={this.props.github.sizes} />
              </a>
            </Grid>
            <Grid w={75} mx={[0, 2, 2, 0]}>
              <a href="https://www.codewars.com/users/aslezak">
                <Img className="social-img" sizes={this.props.codewars.sizes} />
              </a>
            </Grid>
          </Box>
        </Container>
      </Flex>
    );
  }
}
