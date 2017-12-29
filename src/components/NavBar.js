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
      <div>
        <Navbar color="faded" light expand="md">
          <Link to={"/"}>
            <NavbarBrand>
              <img src="/static/img/andyslezak_logo.svg" />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to={"/"}>
                  <NavLink>HOME</NavLink>
                </Link>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SKILLS
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to={`/design`}>
                      <NavLink>DESIGN</NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={`/code`}>
                      <NavLink>CODE</NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={`/cloud`}>
                      <NavLink>CLOUD</NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={`/iot`}>
                      <NavLink>IOT</NavLink>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to={"/portfolio"}>
                  <NavLink>PORTFOLIO</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/about"}>
                  <NavLink>ABOUT</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
