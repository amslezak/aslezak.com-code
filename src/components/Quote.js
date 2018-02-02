import React from "react";
import styled from "react-emotion";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import { Flex, Subhead, Box, Heading, Text, Container } from "rebass";
import XRay from "react-x-ray";
const Wrapper = styled.div``;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex bg="#fff">
        <Container my={[3, 4]}>
          <Box my={4}>
            <Box my={[3, 4]} px={[3, 4]} py={[2, 2]} w={1}>
              <Subhead f={4}>{this.props.quotes.quote}</Subhead>
              <Subhead
                f={[1, 2]}
                align="right"
                mt={3}
                style={{
                  textTransform: "uppercase",
                  color: "#43A6B1"
                }}
              >
                {this.props.quotes.author}
              </Subhead>
            </Box>
          </Box>
        </Container>
      </Flex>
    );
  }
}
