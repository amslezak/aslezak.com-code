import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import BgImage from "../components/global/BgImage";

const Wrapper = styled.div`
  width: 100wh;
  height: 100vh;
  @media (max-width: 700px) {
    padding: 50px;
  }
`;

const ServicesContainer = styled.div`
  position: absolute;
  z-index: 1;
  margin: auto;
  width: 100wh
  border-style: dotted;
`;

const Header = styled.div`
  h1 {
    font-family: AvenirNext-Bold;
    font-size: 48px;
    color: #FFFFFF;
    line-height: 63px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.47);

  }

  h2 {
  text-transform: uppercase;
  font-size: 18px;
  color: #3EA6B2;
  letter-spacing: 0.5px;
  line-height: 24px;
  padding: 0;
  margin: 0;
}


  @media (max-width: 700px) {
    padding-bottom: 50px
    margin: 0
  }
`;

const ServiceItem = styled.div`
  padding: 25px;

  img {
    max-height: 200px;
    max-width: 200px;
    align: center;
  }

  h2,
  h6 {
    margin: 25px 0;
  }

  h2 {
    font-family: AvenirNext-Bold;
    font-size: 24px;
    color: #e4e4e4;
    letter-spacing: 1.17px;
    line-height: 32px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
  }

  h6 {
    font-family: Avenir;
  }
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
                  <h2>Services Offered</h2>
                </Header>
              </div>
            </div>

            <div className="row center-lg center-md center-sm center-xs">
              <div className="col-xs col-sm col-md-6 col-lg-6">
                <ServiceItem>
                  <h2>Design</h2>
                  <Link to={"/design"}>
                    <img src="/static/img/work/design.png" />
                  </Link>
                  <h6>Vestibulum rutrum quam vitae fringilla tincidunt.</h6>
                </ServiceItem>
              </div>

              <div className="col-xs col-sm col-md-6 col-lg-6">
                <ServiceItem>
                  <h2>Code</h2>
                  <Link to={"/code"}>
                    <img src="/static/img/work/code.png" />
                  </Link>
                  <h6>Vestibulum rutrum quam vitae fringilla tincidunt.</h6>
                </ServiceItem>
              </div>
              <div className="col-xs col-sm col-md-6 col-lg-6">
                <ServiceItem>
                  <h2>Cloud</h2>
                  <Link to={"/cloud"}>
                    <img src="/static/img/work/cloud.png" />
                  </Link>
                  <h6>Vestibulum rutrum quam vitae fringilla tincidunt.</h6>
                </ServiceItem>
              </div>
              <div className="col-xs col-sm col-md-6 col-lg-6">
                <ServiceItem>
                  <h2>IoT</h2>
                  <Link to={"/iot"}>
                    <img src="/static/img/work/iot.png" />
                  </Link>
                  <h6>Vestibulum rutrum quam vitae fringilla tincidunt.</h6>
                </ServiceItem>
              </div>
            </div>
          </div>
        </ServicesContainer>
        <BgImage sizes={this.props.background.sizes} />
      </Wrapper>
    );
  }
}
