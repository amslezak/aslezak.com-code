import React from "react";
import Link from "gatsby-link";
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
import "../css/aslezak.css";

import styled from "react-emotion";

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
  margin: 0;

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

  @media (max-width: 414px) {
    padding: 0 0 0 6px;
  }
`;

const NavContainer = styled.div``;

export default class Example extends React.Component {
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
                <img src="/static/img/andyslezak_logo.svg" />
              </Logo>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LinkWrapper>
                  <Link to={"/"}>
                    <NavLink>HOME</NavLink>
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
                      <Link to={`/design`}>
                        <NavLink>DESIGN</NavLink>
                      </Link>
                    </LinkWrapper>
                  </DropdownItem>
                  <DropdownItem>
                    <LinkWrapper>
                      <Link to={`/code`}>
                        <NavLink>CODE</NavLink>
                      </Link>
                    </LinkWrapper>
                  </DropdownItem>
                  <DropdownItem>
                    <LinkWrapper>
                      <Link to={`/cloud`}>
                        <NavLink>CLOUD</NavLink>
                      </Link>
                    </LinkWrapper>
                  </DropdownItem>
                  <DropdownItem>
                    <LinkWrapper>
                      <Link to={`/iot`}>
                        <NavLink>IOT</NavLink>
                      </Link>
                    </LinkWrapper>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <LinkWrapper>
                  <Link to={"/portfolio"}>
                    <NavLink>PORTFOLIO</NavLink>
                  </Link>
                </LinkWrapper>
              </NavItem>
              <NavItem>
                <LinkWrapper>
                  <Link to={"/about"}>
                    <NavLink>ABOUT</NavLink>
                  </Link>
                </LinkWrapper>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
