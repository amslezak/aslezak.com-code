import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Button from "../components/Button";
import "../css/aslezak.scss";

import { Element } from "react-scroll";

const Wrapper = styled.div`
  padding: 0;

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
  padding: 0;
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
  margin: -125px 0 0 50px;
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

const FormWrapper = styled.div`
  color: #e4e4e4;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1440px) {
    padding: 50px 0;
  }
  @media (max-width: 1024px) {
    padding: 25px 0;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 414px) {
    padding: 0;
    margin: 0;
  }
`;

const ButtonWrapper = styled.div``;

export default class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Img
          sizes={this.props.background.sizes}
          className="contact-wood-background"
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
                <FormWrapper>
                  <Form>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Jane Appleseed"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="jane@appleseed.com"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Message</Label>
                      <Input
                        type="textarea"
                        name="text"
                        id="exampleText"
                        style={{ height: "100px" }}
                        placeholder="Hi, Andy - let's work together!"
                      />
                    </FormGroup>
                    <Button title="Send" block />
                  </Form>
                </FormWrapper>
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
