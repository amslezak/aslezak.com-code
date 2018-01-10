import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import backgroundWood from "../images/background-wood.jpg";

const Wrapper = styled.div`
  padding: 100px 0;
  background-image: url(${backgroundWood});

  background-size: 1800px;
  @media (max-width: 700px) {
  }
`;

const ServicesContainer = styled.div``;

const Header = styled.div`
  h1 {
    font-family: AvenirNext-Bold;
    font-size: 48px;
    color: #ffffff;
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

  @media (max-width: 700px) {
    padding-bottom: 50px;
  }

  @media (max-width: 668px) {
    padding-left: 48px;
  }
`;

const ServiceItem = styled.div`
  padding: 25px;

  h2 {
    font-family: AvenirNext-Bold;
    font-size: 24px;
    color: #e4e4e4;
    letter-spacing: 2.25px;
    line-height: 64px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
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
  }
`;

const ImageWrapper = styled.div``;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.bgSrcSet = props.background.sizes.srcSet;
  }
  render() {
    return (
      <Wrapper>
        <ServicesContainer>
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
                  <h2>Design</h2>
                </ServiceItem>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 hvr-grow">
                <ServiceItem>
                  <Link to={"/code"}>
                    <Img sizes={this.props.code.sizes} />
                  </Link>
                  <h2>Code</h2>
                </ServiceItem>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 hvr-grow">
                <ServiceItem>
                  <Link to={"/cloud"}>
                    <Img sizes={this.props.cloud.sizes} />
                  </Link>
                  <h2>Cloud</h2>
                </ServiceItem>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 hvr-grow">
                <ServiceItem>
                  <Link to={"/iot"}>
                    <Img sizes={this.props.iot.sizes} />
                  </Link>
                  <h2>IoT</h2>
                </ServiceItem>
              </div>
            </div>
          </div>
        </ServicesContainer>
      </Wrapper>
    );
  }
}
