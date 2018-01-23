import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import XRay from "react-x-ray";
import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import { Flex, Box, Heading, Text, Container, Border, NavLink } from "rebass";

import { Grid } from "grid-styled";

export default class App extends React.Component {
  render() {
    return (
      <XRay>
        <Flex bg="#fff" column>
          <Container w={1}>
            <Box>
              <Grid w={50} p={1}>
                <a href="https://twitter.com/aslezak">
                  <Img
                    className="social-img"
                    sizes={this.props.twitter.sizes}
                  />
                </a>
              </Grid>
              <Grid w={50} p={1}>
                <a href="https://www.github.com/amslezak">
                  <Img className="social-img" sizes={this.props.github.sizes} />
                </a>
              </Grid>
              <Grid w={50} p={1}>
                <a href="https://www.codewars.com/users/aslezak">
                  <Img
                    className="social-img"
                    sizes={this.props.codewars.sizes}
                  />
                </a>
              </Grid>
            </Box>
          </Container>
        </Flex>
      </XRay>
    );
  }
}
