import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import "../css/aslezak.scss";

import { Element } from "react-scroll";

const Wrapper = styled.div`
  @media (max-width: 1440px) {
  }

  @media (max-width: 768px) {
    height: 80vh;
  }

  @media (max-width: 414px) {
    height: 76vh;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 375px) {
    height: 72vh;
    background-color: transparent;
  }
`;

const ContactContainer = styled.div`
  height: 700px;
  padding: 0;
  padding: 50px 0 0 0;
  margin: 0;

  @media (max-width: 1440px) {
  }

  @media (max-width: 414px) {
    height: 80vh;
    padding: 0 25px;
    margin: 0;
  }

  @media (max-width: 375px) {
  }
`;

const Header = styled.div`
  margin: 0;
  padding: 0;

  h1 {
    font-family: AvenirNext-Bold;
    font-size: 48px;
    color: #ffffff;
    line-height: 63px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
  }

  h2 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    color: #e4e4e4;
    letter-spacing: 1.5px;
    line-height: 24px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
  }

  @media (max-width: 1440px) {
  }

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 25px;
  }

  @media (max-width: 414px) {
    padding: 25px 0 0 0;
    margin: 0;

    h2 {
      display: none;
    }
  }
`;

const ContactPicture = styled.div`
img {
  padding: 25px
  margin: -100px 0 0 25px;
}
  @media (max-width: 1440px) {
    margin: 0;
    padding: 0;
    img {
      padding: 50px
      margin: -100px 0 0 50px;
    }
  }

  @media (max-width: 768px) {
    display:none;
  }

  @media (max-width: 414px) {
    margin: -75px 0 0 0;
    padding: 0 25px;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Img
          sizes={this.props.background.sizes}
          className="contact-wood-background"
          backgroundColor="#99765E"
          style={{ position: "absolute", zIndex: -1 }}
        />
        <ContactContainer css={{ position: "relative" }}>
          <div className="container">
            <Element name="contact" />
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
                <Header>
                  <h1>CONTACT</h1>
                  <h2> Message</h2>
                </Header>
              </div>
            </div>
            <div className="row start-md">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <ContactForm />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <ContactPicture>
                  <Img sizes={this.props.image.sizes} />
                </ContactPicture>
              </div>
            </div>
          </div>
        </ContactContainer>
      </Wrapper>
    );
  }
}
