import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;

  @media (max-width: 768px) {
  }

  @media (max-width: 414px) {
    height: 115%;
  }
  @media (max-width: 375px) {
    height: 100%;
  }
`;

const ServicesContainer = styled.div`
  padding: 25px;
  z-index: 1;
`;

const Header = styled.div`
  h1 {
    font-family: ${props => props.theme.h1.font}
    font-size: 48px;
    color: #ffffff;
    letter-spacing: 1px
    line-height: 63px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
  }

  h2 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    color: #e4e4e4;
    letter-spacing: 1.5px;
    line-height: 24px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`;

const ServiceItem = styled.div`
  padding: 0 50px;

  h2 {
    font-family: AvenirNext-Bold, Montserrat, sans-serif;
    font-size: 24px;
    color: #e4e4e4;
    letter-spacing: 2.25px;
    line-height: 64px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
  }

  a {
    font-family: AvenirNext-Bold, Montserrat, sans-serif;
    font-size: 24px;
    color: #e4e4e4;
    letter-spacing: 1.25px;
    line-height: 64px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    text-decoration: none;
  }

  h6 {
    font-weight: 100;
    color: #e4e4e4;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 24px;
    letter-spacing: 2.1px;
    line-height: 32px;

    > b {
      font-weight: 500;
    }

    @media (max-width: 768px) {
    }

    @media (max-width: 414px) {
      padding: 0;
    }
  }
`;

const ImageWrapper = styled.div``;

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.bgSrcSet = props.background.sizes.srcSet;
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Img
            className="work-background"
            style={{ position: "absolute" }}
            backgroundColor="#99765E"
            sizes={this.props.background.sizes}
          />

          <ServicesContainer className="z1" style={{ position: "relative" }}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-6 col-lg-12">
                  <Header>
                    <h1>SKILLS</h1>
                    <h2>My Capabilities</h2>
                  </Header>
                </div>
              </div>

              <div className="row center-lg center-md center-sm center-xs">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 hvr-grow">
                  <ServiceItem>
                    <Link to={"/design"}>
                      <Img sizes={this.props.design.sizes} />
                    </Link>
                    <h2>
                      <Link to={"/design"}>Design</Link>
                    </h2>
                  </ServiceItem>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 hvr-grow">
                  <ServiceItem>
                    <Link to={"/code"}>
                      <Img sizes={this.props.code.sizes} />
                    </Link>
                    <h2>
                      <Link to={"/code"}>Code</Link>
                    </h2>
                  </ServiceItem>
                </div>

                <div
                  css={{ zIndex: 2 }}
                  className="col-xs-12 col-sm-6 col-md-6 col-lg-6 hvr-grow"
                >
                  <ServiceItem>
                    <Link to={"/cloud"}>
                      <Img sizes={this.props.cloud.sizes} />
                    </Link>
                    <h2>
                      <Link to={"/cloud"}>Cloud</Link>
                    </h2>
                  </ServiceItem>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 hvr-grow">
                  <ServiceItem>
                    <Link to={"/iot"}>
                      <Img sizes={this.props.iot.sizes} />
                    </Link>
                    <h2>
                      <Link to={"/iot"}>IoT</Link>
                    </h2>
                  </ServiceItem>
                </div>
              </div>
            </div>
          </ServicesContainer>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
