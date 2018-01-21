import React from "react";
import Img from "gatsby-image";
import styled from "react-emotion";
import Container from "../style/Container";
import { Flex, Box, Grid } from "grid-styled";
import { flex, space, width, fontSize, color } from "styled-system";
import "../css/aslezak.scss";

const HeroWrapper = styled.div`
  z-index: 1;
  position: relative;
`;

const HeroText = styled.div`
  h1 {
    font-family: AvenirNext-Bold;
    font-size: 64px;
    color: #ffffff;
    line-height: 116px;
    letter-spacing: 1.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
    text-transform: uppercase;
  }

  h2 {
    font-family: Arvo;
    font-size: 36px;
    color: #ffffff;
    letter-spacing: -0.42px;
    line-height: 45px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const ImageWrapper = styled.div``;

export default class HeroHeader extends React.Component {
  constructor(props) {
    super(props);
    this.heroImage = props.heroImage;
  }

  render() {
    return (
      <HeroWrapper>
        <Container>
          <Flex align="center">
            <Box p={3} width={[1, 1 / 2]}>
              <HeroText>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
              </HeroText>
            </Box>
            <Box p={3} width={[1, 1 / 2]}>
              <ImageWrapper>
                <Img
                  className="skill-image"
                  sizes={
                    this.props.logos.edges.filter(item => {
                      let re = new RegExp(this.heroImage);
                      return re.test(item.node.sizes.src);
                    })[0].node.sizes
                  }
                />
              </ImageWrapper>
            </Box>
          </Flex>
        </Container>
      </HeroWrapper>
    );
  }
}
