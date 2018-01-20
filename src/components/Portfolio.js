import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import "../css/aslezak.scss";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;

  height: 100%;
  @media (max-width: 768px) {
    height: 100%;
  }

  @media (max-width: 414px) {
  }
`;

const ServicesContainer = styled.div`
  padding: 25px;
  z-index: 1;
`;

const Header = styled.div`
  h1 {
    padding: 0;
    margin: 0;
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
  }

  @media (max-width: 700px) {
    padding-bottom: 50px;
  }

  @media(max-width: 414px) {
    padding: 25px;
  }
`;

const Portfolio = styled.div`
  padding: 0 225px;

  @media (max-width: 768px) {
    padding: 0 175px;
    img {
      margin: 0;
      padding: 0;
    }
  }

  @media (max-width: 414px) {
    padding: 0;
  }
`;

const Button = styled.button`
  font-family: AvenirNext-Bold;
  font-size: 24px;
  color: #e4e4e4;
  letter-spacing: 1.17px;
  line-height: 32px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background: #f1f1f1;
  border: 3px solid #ffffff;
  border-radius: 10px;
`;

const MoreButton = styled.div`
  margin: -125px 0 0 -25px;

  > a {
    font-family: AvenirNext-Bold;
    font-size: 24px;
    color: #e4e4e4;
    letter-spacing: 2.25px;
    line-height: 64px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: -50px 0 0 -10px;
    padding: 25px 0;
  }

  @media (max-width: 414px) {
    margin: -40px 0 50px 0;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Img
          className="portfolio-background"
          style={{ position: "absolute" }}
          sizes={this.props.background.sizes}
        />
        <ServicesContainer className="z1" style={{ position: "relative" }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-12 col-lg-12">
                <Header>
                  <h1>WORK</h1>
                  <h2>Projects</h2>
                </Header>
              </div>
            </div>

            <div className="row center-lg center-md center-sm center-xs">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 hvr-grow">
                <Portfolio>
                  <Link to={"/portfolio"}>
                    <Img
                      sizes={this.props.image.sizes}
                      className="z1"
                      style={{ position: "relative" }}
                    />
                  </Link>
                </Portfolio>

                <MoreButton>
                  <Link to={"/portfolio"}>PORTFOLIO</Link>
                </MoreButton>
              </div>
            </div>
          </div>
        </ServicesContainer>
      </Wrapper>
    );
  }
}
