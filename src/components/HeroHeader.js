import React from "react"
import Img from "gatsby-image"
import styled from "react-emotion"
import { ThemeProvider } from "emotion-theming"
import theme from "../css/Theme"
import { Flex, Box, Heading, Container, Absolute } from "rebass"
import { flex, space, width, fontSize, color } from "styled-system"
import XRay from "react-x-ray"
import "../css/aslezak.scss"

import HeaderLight from "../styled/HeaderLight"
import SubHeaderLight from "../styled/SubHeaderLight"
export default class HeroHeader extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex>
          <Absolute z={-1} w={1}>
            <Img
              className="skill-background"
              sizes={this.props.background.sizes}
              backgroundColor="#99765E"
            />
          </Absolute>

          <Container w={1} my={[-1, -2, -3, -4]}>
            <Flex align="center" wrap>
              <Box width={[1 / 2]}>
                <Flex column>
                  <Box>
                    <HeaderLight f={[5, 6, 7, 8]}>
                      {this.props.title}
                    </HeaderLight>
                  </Box>
                  <Box>
                    <SubHeaderLight letterSpacing={1} f={[2, 3, 4, 4]}>
                      {this.props.subtitle}
                    </SubHeaderLight>
                  </Box>
                </Flex>
              </Box>
              <Box width={[1 / 2]} p={[0, 1, 2, 3]}>
                <Img
                  sizes={
                    this.props.logos.edges.filter(item => {
                      let re = new RegExp(this.props.heroImage)
                      return re.test(item.node.sizes.src)
                    })[0].node.sizes
                  }
                />
              </Box>
            </Flex>
          </Container>
        </Flex>
      </ThemeProvider>
    )
  }
}
