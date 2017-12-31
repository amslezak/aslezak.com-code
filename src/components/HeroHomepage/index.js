import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "react-emotion";
import heroBg from "../../images/hero/hero.jpg";

const Hero = styled.div`
padding: 100px 0;
  background: url(${heroBg}) no-repeat
  background-position: 50% 50%
  background-size: cover;
  height: 100vh;



  h1 {
    font-family: AvenirNext-Bold;
    font-size: 72px;
    color: #FFFFFF;
    line-height: 95px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.47);
    text-transform: uppercase;
  }

  h2 {
    font-family: AvenirNext-Medium;
    font-size: 36px;
    color: #FFFFFF;
    letter-spacing: 0.62px;
    line-height: 49px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.50);
  }

  h3 {
font-family: Arvo;
font-size: 24px;
color: #FFFFFF;
line-height: 32px;
text-shadow: 0 2px 4px rgba(0,0,0,0.75);
  }
`;

export default class componentName extends Component {
  constructor(props) {
    super(props);
    console.log("homepage", props);
  }

  render() {
    return (
      <Hero>
        <div className="container">
          <div className="row center-lg center-md- center-sm center-xs">
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-12">
              <h3>Welcome! I'm</h3>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-12">
              <h1>Andy Slezak</h1>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-12">
              <h2>I like to design & code real-time web apps</h2>
            </div>
          </div>
        </div>
      </Hero>
    );
  }
}
