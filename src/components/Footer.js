import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Button from "../components/Button";

import backgroundWood from "../images/background-wood.jpg";

const Wrapper = styled.div`
  padding: 50px 0;
  background-image: url(${backgroundWood});
  height: 78vh;
  background-size: 1800px;

  @media (max-width: 700px) {
  }
`;

const ContactContainer = styled.div``;

const Header = styled.div`
  padding: 0;
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

  @media (max-width: 700px) {
    padding-bottom: 50px;
  }

  @media (max-width: 668px) {
    padding-left: 48px;
  }
`;

const ServiceItem = styled.div`
  padding: 50px 0 0 0;
`;

const ContactPicture = styled.div`
  margin: -90px 0 0 50px;
`;

const FormWrapper = styled.div`
  padding-top 25px;
  color: #e4e4e4
    letter-spacing: .5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;

const ButtonWrapper = styled.div``;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <ContactContainer>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-6 col-lg-12">
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
                      <Button title="Send" className="col-lg-2" />
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
