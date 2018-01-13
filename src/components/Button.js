import React, { Component } from "react";
import styled from "react-emotion";

const Button = styled.button`
  background: #6859b2;
  align: middle;
  margin: 25px 0;
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  border-radius: 5px;
  box-shadow: 1px 0px 10px #888888;
  outline: none;
  border: none;

  &:active {
    box-shadow: 0px 1px 15px grey;
    transition: 0.15s;
    transform: scale(0.98);
    transform: translate(0px, 1px);
    outline: none;
    border: none;
  }

  &:focus {
    outline: none;
    border: none;
    transition: 0.05s;
    transform: translate(0px, 3px);
  }

  &:hover {
    box-shadow: 0px 1px 25px #757575;
    transition: 0.4s;
  }

  > h4 {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0 1px 5px #000;
    color: HSLA(0, 0%, 100%, 0.9);
    letter-spacing: 1.1px;
  }

  @media (max-width: 414px) {
    display: block;
    width: 100%;
  }
`;

class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <Button>
          <h4>{this.props.title}</h4>
        </Button>
      </div>
    );
  }
}

export default ButtonComponent;
