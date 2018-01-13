import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Button from "../components/Button";

import { Element } from "react-scroll";

import backgroundWood from "../images/background-wood.jpg";

const Wrapper = styled.div`
  padding: 50px 0 0 0;
  background-image: url(${backgroundWood});
  height: 78vh;

  background-size: 2048px;
  @media (max-width: 768px) {
    height: 85vh;
    padding: 75px 25px 25px 25px;
  }

  @media (max-width: 414px) {
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const ContactContainer = styled.div``;

const Header = styled.div`
  padding: 10px;
  margin: 0;

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

  @media (max-width: 768px) {
    padding-bottom: 0px;
  }

  @media (max-width: 414px) {
    padding: 25px 0 0 25px;
    margin: 0;
  }
`;

const ServiceItem = styled.div`
  padding: 50px 0 0 0;

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 414px) {
    padding: 5px 0;
  }
`;

const ContactPicture = styled.div`
  margin: -90px 0 0 50px;

  @media (max-width: 768px) {
    margin: -350px 0 -200px 0;
    padding: 150px;
  }

  @media (max-width: 414px) {
    margin: -75px 0 0 0;
    padding: 0 25px;
  }
`;

const FormWrapper = styled.div`
  padding-top 25px;
  color: #e4e4e4
    letter-spacing: .5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 25px;
  }

`;

const ButtonWrapper = styled.div``;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <ContactContainer>
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
                <ServiceItem>
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
                          placeholder="Hey, Andy!  Let's work together!"
                        />
                      </FormGroup>
                      <Button title="Send" block />
                    </Form>
                  </FormWrapper>
                </ServiceItem>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <ServiceItem>
                  <ContactPicture>
                    <Img sizes={this.props.image.sizes} />
                  </ContactPicture>
                </ServiceItem>
              </div>
            </div>
          </div>
        </ContactContainer>
      </Wrapper>
    );
  }
}
