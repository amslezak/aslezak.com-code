import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../css/aslezak.scss";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import styled from "react-emotion";
import { Flex, Box, Grid } from "grid-styled";

const NavbarWrapper = styled.div`
  -webkit-backface-visibility: hidden
  &:after {
    position: absolute;
    width: 100%;
    z-index: 10000;
    box-shadow: 0px 0px 8px 2px #000000;
  }
`;

const Logo = styled.div`
  padding: 0;
  width: 150px;
  margin: 0;
  z-index: 4;

  @media (max-width: 414px) {
    padding: 0;
  }
`;

const LinkWrapper = styled.div`
  font-weight: 500;
  > a {
    text-decoration: none;
    -webkit-backface-visibility: hidden;
  }

  > a:hover {
    color: #43a6b1;

  @media (max-width: 414px) {
  }
`;

const NavContainer = styled.div``;

export default class navbar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Flex>
        <div
          className="container"
          id="NavBar"
          className={NavContainer}
          style={{ marginBottom: "78px" }}
        >
          <Navbar
            light
            expand="md"
            className="fixed-top bg-light bg-faded nav-shadow "
          >
            <Link to={"/"}>
              <NavbarBrand>
                <Logo>
                  <Img sizes={this.props.logo.sizes} />
                </Logo>
              </NavbarBrand>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <LinkWrapper>
                    <Link to={"/"}>
                      <NavLink onClick={this.toggle}>HOME</NavLink>
                    </Link>
                  </LinkWrapper>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <LinkWrapper>
                    <DropdownToggle nav caret>
                      SKILLS
                    </DropdownToggle>
                  </LinkWrapper>
                  <DropdownMenu>
                    <DropdownItem>
                      <LinkWrapper>
                        <Link to={`/design`} replace>
                          <NavLink onClick={this.toggle}>DESIGN</NavLink>
                        </Link>
                      </LinkWrapper>
                    </DropdownItem>
                    <DropdownItem>
                      <LinkWrapper>
                        <Link to={`/code`}>
                          <NavLink onClick={this.toggle}>CODE</NavLink>
                        </Link>
                      </LinkWrapper>
                    </DropdownItem>
                    <DropdownItem>
                      <LinkWrapper>
                        <Link to={`/cloud`}>
                          <NavLink onClick={this.toggle}>CLOUD</NavLink>
                        </Link>
                      </LinkWrapper>
                    </DropdownItem>
                    <DropdownItem>
                      <LinkWrapper>
                        <Link to={`/iot`}>
                          <NavLink onClick={this.toggle}>IOT</NavLink>
                        </Link>
                      </LinkWrapper>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <LinkWrapper>
                    <Link to={"/portfolio"}>
                      <NavLink onClick={this.toggle}>PORTFOLIO</NavLink>
                    </Link>
                  </LinkWrapper>
                </NavItem>
                <NavItem>
                  <LinkWrapper>
                    <Link to={"/about"} replace="true">
                      <NavLink onClick={this.toggle}>ABOUT</NavLink>
                    </Link>
                  </LinkWrapper>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Flex>
    );
  }
}
