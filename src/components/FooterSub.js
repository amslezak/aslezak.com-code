import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Wrapper = styled.div`
  z-index: -1;
  background-color: #f8f9fa;
  padding: 20px 0;
  @media (max-width: 768px) {
    padding: 25px;
    margin: 0;
  }

  @media (max-width: 414px) {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 414px) {
    height: 30px;
    background-color: transparent;
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
  @media (max-width: 414px) {
    display: none;
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

  @media (max-width: 414px) {
    padding: 0 0 0 25px;
    display: none;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const Social = styled.div`
   margin: -25px 0 0 0
   padding: 0 15px;

  @media (max-width: 768px) {
    margin: -15px 0 0 0;
    padding: 0;
  }

  @media (max-width: 414px) {
    margin: 0;
    padding: 0;

    img {
      padding: 35px;
    }
  }

  @media (max-width: 375px) {
    padding: 0;

    img {
    margin: 25px 0 0 0;
      padding: 30px;
    }
  }

  @media (max-width: 320px) {
    img {
      margin: 0 0 0 5px;
    }
  }
`;

const SocialWrapper = styled.section`
  height: 100%;
  @media (max-width: 414px) {
  }
`;

const NavWrapper = styled.section`
  @media (max-width: 414px) {
    display: none;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-xs-4 col-sm-12 col-md-2 col-lg-2">
                  <Header>
                    <Link to={"/"}>Home</Link>
                  </Header>
                </div>
                <div className="col-xs-4 col-sm-8 col-md-2 col-lg-2">
                  <Header>SKILLS</Header>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-8 col-md-2 col-lg-2">
                  <NavItem>
                    <Link to={"/portfolio"}>Portfolio</Link>
                  </NavItem>
                </div>

                <div className="col-xs-4 col-sm-8 col-md-2 col-lg-2">
                  <NavItem>
                    <Link to={"/design"}>Design</Link>
                  </NavItem>
                </div>

                <div className="col-xs-4 col-sm-8 col-md-2 col-lg-1">
                  <NavItem>
                    <Link to={"/code"}>Code</Link>
                  </NavItem>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-4 col-sm-8 col-md-2 col-lg-2">
                  <NavItem>
                    <Link to={"/about"}>About</Link>
                  </NavItem>
                </div>
                <div className="col-xs-4 col-sm-8 col-md-2 col-lg-2">
                  <NavItem>
                    <Link to={"/cloud"}>Cloud</Link>
                  </NavItem>
                </div>
                <div className="col-xs-4 col-sm-8 col-md-2 col-lg-2">
                  <NavItem>
                    <Link to={"/iot"}>IoT</Link>
                  </NavItem>
                </div>

                <div className="offset-lg-3 offset-md-3 col-xs-4 col-sm-1 col-md-1 col-lg-1">
                  <Social>
                    <a href="https://twitter.com/aslezak">
                      <Img sizes={this.props.twitter.sizes} />
                    </a>
                  </Social>
                </div>
                <div className="col-xs-4 col-sm-1 col-md-1 col-lg-1">
                  <Social>
                    <a href="https://www.github.com/amslezak">
                      <Img sizes={this.props.github.sizes} />
                    </a>
                  </Social>
                </div>
                <div className="col-xs-4 col-sm-1 col-md-1 col-lg-1">
                  <Social>
                    <a href="https://www.codewars.com/users/aslezak">
                      <Img sizes={this.props.codewars.sizes} />
                    </a>
                  </Social>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
