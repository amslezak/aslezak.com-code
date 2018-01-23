import React from "react";
import styled from "react-emotion";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import { Flex, Box, Heading, Text, Container } from "rebass";
import XRay from "react-x-ray";
const Wrapper = styled.div``;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex bg="#fff">
        <Container>
          <Box my={[3, 4]} px={[3, 4]} py={[3, 4]} w={1}>
            <Heading f={4} justify>
              {this.props.quotes.quote}
            </Heading>
            <Heading f={1} align="right" mt={3}>
              {this.props.quotes.author}
            </Heading>
          </Box>
        </Container>
      </Flex>
    );
  }
}
