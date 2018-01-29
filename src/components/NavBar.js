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
import { Flex, Box, Heading, Text, Container, Border } from "rebass";

const Logo = styled.div`
  width: 104px;
  margin: 0 0 0 16px;
  z-index: 4;
`;

const LinkWrapper = styled.div`
  font-weight: 500;
  > a {
    text-decoration: none;
    -webkit-backface-visibility: hidden;
  }

  > a:hover {
    color: #43a6b1;

`;

export default class navbar extends React.Component {
  constructor(props) {
    super(props);

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
        <Box w={1}>
          <div id="NavBar" style={{ marginBottom: "65px" }}>
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
        </Box>
      </Flex>
    );
  }
}
