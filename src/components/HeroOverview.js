import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import Button from "../components/Button";

import Container from "../style/Container";

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

import { Flex, Box, Grid } from "grid-styled";

const Wrapper = styled.div`
  z-index: 3;
  padding: 35px 0;
  margin: 0;
  width: 100%
  background-color: #fafafa;
  border-bottom: 1px solid #e0e0e0;
`;

const Header = styled.div`
  h1 {
    font-family: AvenirNext-Bold;
    font-size: 24px;
    color: #626262;
    letter-spacing: 2px;
    line-height: 49px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 18px;
    color: #3ea6b2;
    letter-spacing: 0.65px;
    line-height: 29px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.58);
    line-height: 29px;
    text-align: justify;
    text-justify: inter-word;
    margin-top: 25px;
  }

  h4 {
    font-size: 18px;
    letter-spacing: 0.65px;
    line-height: 26px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
`;

const LearnMore = styled.button`
  display: block;
  background: #6859b2;
  align: middle;
  margin: 50px 0 0 0;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  h4 {
    text-shadow: 0 1px 5px #000;
    color: HSLA(0, 0%, 100%, 0.9);
    letter-spacing: 1.1px;
  }
`;

export default class HeroOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex>
        <Wrapper>
          <Container>
            <Header>
              <Box p={3}>
                <h1>{this.props.title}</h1>
                <h3>{this.props.body}</h3>

                <Link to="more" smooth={true} duration={500} offset={15}>
                  <Button title="Learn More" className="col-lg-2" />
                </Link>

                <Element name="more" />
              </Box>
            </Header>
          </Container>
        </Wrapper>
      </Flex>
    );
  }
}
