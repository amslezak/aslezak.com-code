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

import "../css/bootstrap.css";
import "../css/aslezak.scss";

import { Link as ScrollLink } from "react-scroll";
import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import styled from "react-emotion";
import { Flex, Box, Text, Container, Border } from "rebass";
import LinkWrapper from "../styled/LinkWrapper";
import ContactNav from "../styled/ContactNav";
const Logo = styled.div`
  width: 120px;
  margin: 0;
  z-index: 1;
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
          <div id="NavBar" style={{ marginBottom: "78px" }}>
            <Navbar
              light
              expand="lg"
              className="fixed-top bg-light bg-faded nav-shadow "
            >
              <Link to={"/"}>
                <Logo onClick={this.toggle}>
                  <Img sizes={this.props.logo.sizes} />
                </Logo>
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <LinkWrapper mx={[0, 1]} m={1} onClick={this.toggle}>
                    <Link to={"/"}>HOME</Link>
                  </LinkWrapper>
                  <LinkWrapper mx={[0, 1]} m={1} onClick={this.toggle}>
                    <Link to={`/design`}>DESIGN</Link>
                  </LinkWrapper>
                  <LinkWrapper mx={[0, 1]} m={1} onClick={this.toggle}>
                    <Link to={`/code`}>CODE</Link>
                  </LinkWrapper>
                  <LinkWrapper mx={[0, 1]} m={1} onClick={this.toggle}>
                    <Link to={`/cloud`}>CLOUD</Link>
                  </LinkWrapper>
                  <LinkWrapper mx={[0, 1]} m={1} onClick={this.toggle}>
                    <Link to={`/iot`}>IOT</Link>
                  </LinkWrapper>
                  <LinkWrapper mx={[0, 1]} m={1} onClick={this.toggle}>
                    <Link to={"/portfolio"}>PORTFOLIO</Link>
                  </LinkWrapper>
                  <LinkWrapper mx={[0, 1]} m={1} onClick={this.toggle}>
                    <Link to={"/about"}>ABOUT</Link>
                  </LinkWrapper>
                  <LinkWrapper mx={[0, 1]} m={1} onClick={this.toggle}>
                    <ScrollLink
                      onClick={this.toggle}
                      to="contact"
                      smooth={true}
                      duration={1500}
                      offset={-100}
                      animation="easeInOutQuart"
                    >
                      {" "}
                      <ContactNav>CONTACT</ContactNav>
                    </ScrollLink>
                  </LinkWrapper>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </Box>
      </Flex>
    );
  }
}
