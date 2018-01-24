import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import { Link } from "react-scroll";

// Styled Components
import { ThemeProvider } from "emotion-theming";
import { Flex, Box, Text, Container } from "rebass";
import HeaderDark from "../styled/HeaderDark";
import theme from "../css/Theme";

import XRay from "react-x-ray";
import ContactLink from "../styled/ContactLink";

const Signature = styled.div`
  max-width: 150px;
`;

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex bg="#fff" wrap column>
          <Container>
            <Box w={1} my={3}>
              <Box>
                <HeaderDark f={6} my={3}>
                  Hello
                </HeaderDark>
              </Box>
              <Box>
                <Text justify f={2}>
                  <p>
                    I'm Andy. I'm a web developer. In a previous life, my best
                    friend and I started a company called CytexOne. It focused
                    on IoT and Smart Home Automation. It lasted 15 years. I'm
                    proud of the team & company that we built. Sadly, we had to
                    shut our doors.
                  </p>
                  <p>
                    Now, I am taking my professional journey solo. I would love
                    to bring my passion and skills to a new & exciting company.
                    If you're doing something clever with technology, then I'm
                    looking to work with you. Thank you for looking around, and
                    please{" "}
                    <Link
                      to="contact"
                      smooth={true}
                      duration={1500}
                      offset={-100}
                      animation="easeInOutQuart"
                    >
                      <ContactLink>contact</ContactLink>
                    </Link>{" "}
                    me if we can work together.
                  </p>
                </Text>
                <HeaderDark f={[3]} my={[3]}>
                  A DEDICATION
                </HeaderDark>
                <Text f={2} justify>
                  <p>
                    This site is dedicated to my mom and dad. To my dad because
                    he gave me the gifts of patience & learning. To my mom
                    because she gave me the gifts of persistence & love.
                  </p>
                </Text>
              </Box>
              <Box w={175} ml="auto" align="right">
                <Img sizes={this.props.logo.sizes} />
              </Box>
            </Box>
          </Container>
        </Flex>
      </ThemeProvider>
    );
  }
}
