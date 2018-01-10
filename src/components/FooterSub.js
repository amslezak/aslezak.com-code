import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Wrapper = styled.div`
  padding: 30px 0;
  height: 15vh;

  background-color: HSLA(0, 0%, 93%, 1);
  @media (max-width: 700px) {
  }
`;

const Header = styled.div`
  font-weight: 600;
  line-height: 29px;
  font-size: 18px;
  letter-spacing: 0.25px;
  padding: 0 0 10px 0;
  text-transform: uppercase;
  text-shadow: 0 1px 1px #fff;
  color: RGBA(65, 65, 65, 0.63);
  > a {
    color: RGBA(65, 65, 65, 0.63);
    text-decoration: none;
  }
`;

const NavItem = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0 1px 1px #fff;
  font-size: 16px;
  color: #448086;
  letter-spacing: 0.25px;
  line-height: 26px;
  > a {
    color: RGBA(65, 65, 65, 0.63);
    text-decoration: none;
  }
`;

const Social = styled.div`
  padding: 0 15px;
`;

const NavWrapper = styled.div``;

const SocialWrapper = styled.div``;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <NavWrapper>
            <div className="row middle-lg">
              <div className="col-xs-12 col-sm-8 col-md-2 col-lg-9">
                <div className="row">
                  <div className="col-xs-12 col-sm-8 col-md-2 col-lg-2">
                    <Header>
                      <Link to={"/"}>Home</Link>
                    </Header>
                  </div>
                  <div className="col-xs-12 col-sm-8 col-md-2 col-lg-2">
                    <Header>SKILLS</Header>
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
                <div className="row bottom-lg">
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
              </div>
              <div className="col-xs-12 col-sm-8 col-md-2 col-lg-3">
                <Social>
                  <Img sizes={this.props.image.sizes} />
                </Social>
              </div>
            </div>
          </NavWrapper>
        </div>
      </Wrapper>
    );
  }
}
