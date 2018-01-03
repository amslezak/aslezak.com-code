import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Wrapper = styled.div`
  padding: 15px 0;
  margin-bottom: 5px;

  background-size: cover;
  @media (max-width: 700px) {
  }
`;

const Header = styled.div`
  font-weight: 700;
  font-family: AvenirNext-Bold;
  font-size: 18px;
  color: #448086;
  letter-spacing: 0.19px;
  padding: 10px 0;
  text-transform: uppercase;
`;

const NavItem = styled.div`
  text-transform: uppercase;
  font-family: AvenirNext-Medium;
  font-size: 16px;
  color: #448086;
  letter-spacing: 0.17px;
  line-height: 21px;
`;

const Social = styled.div`
  // margin: 0 50px;
  padding-bottom: 50px;
  margin-bottom: 500px;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("footersub", props);
  }

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-2 col-lg-2">
              <Header>
                <Link to={"/"}>Home</Link>
              </Header>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-2 col-lg-2">
              <Header>
                <Link to={"/"}>Work</Link>
              </Header>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-sm-8 col-md-2 col-lg-2">
              <NavItem>
                <Link to={"/portfolio"}>Portfolio</Link>
              </NavItem>
            </div>
            <div className="col-xs-2 col-sm-8 col-md-2 col-lg-2">
              <NavItem>
                <Link to={"/design"}>Design</Link>
              </NavItem>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-2 col-lg-2">
              <NavItem>
                <Link to={"/cloud"}>Cloud</Link>
              </NavItem>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-2 col-lg-2">
              <NavItem>
                <Link to={"/about"}>About</Link>
              </NavItem>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-2 col-lg-2">
              <NavItem>
                <Link to={"/code"}>Code</Link>
              </NavItem>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-2 col-lg-2">
              <NavItem>
                <Link to={"/iot"}>IoT</Link>
              </NavItem>
            </div>
          </div>
          <div className="row end-lg">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <Social>
                <Img sizes={this.props.image.sizes} />
              </Social>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
