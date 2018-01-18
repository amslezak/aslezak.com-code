import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "react-emotion";
import heroBg from "../images/hero/hero.jpg";
import "animate.css";
import "../css/aslezak.scss";

const Hero = styled.div`
  margin: 12vh 0;
  height: 75vh;

  h1 {
    font-family: AvenirNext-Bold;
    font-size: 72px;
    color: #ffffff;
    line-height: 95px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
    text-transform: uppercase;
  }

  h2 {
    font-family: Arvo;
    font-size: 36px;
    color: #ffffff;
    letter-spacing: 0.62px;
    line-height: 49px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  h3 {
    font-family: Arvo;
    font-size: 24px;
    color: #ffffff;
    line-height: 32px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 414px) {
    padding: 3vh 0 0 0;

    h1 {
      padding: 0;
      margin: 0;
      font-size: 44px;
      line-height: 73px;
      letter-spacing: 0.5px;
    }

    h2 {
      font-size: 20px;
      line-height: 39px;
      letter-spacing: 0.8px;
      padding: 0;
      margin: 0;
    }

    h3 {
      font-size: 18px;
      line-height: 29px;
      padding: 0;
      margin: 0;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 36px;
      line-height: 58px;
    }

    h2 {
      font-size: 24px;
      line-height: 39px;
    }
    h3 {
      font-size: 16px;
      line-height: 26px;
      font-weight: 100;
    }
  }
`;

const GearWrapper = styled.div``;

export default class componentName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hero>
        <div>
          <Img
            className="homeHero-background"
            style={{ position: "absolute" }}
            sizes={this.props.background.sizes}
          />
          <GearWrapper>
            <Img
              css={{
                top: 25,
                left: 0,
                right: 0,
                zIndex: 1,
                backgroundSize: "cover",
                backgroundPosition: "fixed",
                backgroundPosition: "50% 50%",
                height: "100vh"
              }}
              className="hero-gear"
              style={{ position: "absolute" }}
              sizes={this.props.gear.sizes}
            />
          </GearWrapper>
          <div css={{ zIndex: 2, position: "relative" }} className="container">
            <div className="row center-lg center-md- center-sm center-xs animated fadeInUp">
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
                <h3>Welcome! I'm</h3>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-12 animated fadeIn">
                <h1>Andy Slezak</h1>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-12 animated fadeIn">
                <h2>I design & code enjoyable web apps</h2>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    );
  }
}
