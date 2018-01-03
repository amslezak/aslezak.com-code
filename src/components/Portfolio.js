import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import backgroundWood from "../images/background-wood.jpg";

const Wrapper = styled.div`
  padding: 100px 0;
  background-image: url(${backgroundWood});
  height: 100vh;

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
    color: #3ea6b2;
    letter-spacing: 0.5px;
    line-height: 24px;
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
`;

const Button = styled.button`
  margin: 50px 0;
  padding: 30px;
  font-family: AvenirNext-Bold;
  font-size: 24px;
  color: #e4e4e4;
  letter-spacing: 1.17px;
  line-height: 32px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  /* Rectangle: */
  background: #f1f1f1;
  border: 3px solid #ffffff;
  border-radius: 10px;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Wrapper>
        <ServicesContainer>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-6 col-lg-12">
                <Header>
                  <h1>WORK</h1>
                  <h2 />
                </Header>
              </div>
            </div>

            <div className="row center-lg center-md center-sm center-xs">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-4">
                <ServiceItem>
                  <Img sizes={this.props.P1.sizes} fadein />
                </ServiceItem>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-4">
                <ServiceItem>
                  <Img sizes={this.props.P2.sizes} fadeIn />
                </ServiceItem>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-4">
                <ServiceItem>
                  <Img sizes={this.props.P3.sizes} fadeIn />
                </ServiceItem>
              </div>
            </div>
            <div className="row center-lg- center-md center-sm center-xs">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-2">
                <Link to={"/portfolio"}>
                  <Button
                    type="button"
                    className="btn-lg btn-secondary btn-block"
                  >
                    MORE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ServicesContainer>
      </Wrapper>
    );
  }
}
