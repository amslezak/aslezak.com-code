import React from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import backgroundWood from "../images/background-wood.jpg";

const Wrapper = styled.div`
  padding: 50px 0;
  background-image: url(${backgroundWood});
  height: 83vh;
  @media (max-width: 700px) {
  }
`;

const ContactContainer = styled.div``;

const Header = styled.div`
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
    color: #3ea6b2;
    letter-spacing: 0.5px;
    line-height: 24px;
  }

  @media (max-width: 700px) {
    padding-bottom: 50px;
  }

  @media (max-width: 668px) {
    padding-left: 48px;
  }
`;

const ServiceItem = styled.div`
  padding: 25px;
`;

const FormWrapper = styled.div`
  padding-top 100px;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Wrapper>
        <ContactContainer>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-6 col-lg-12">
                <Header>
                  <h1>CONTACT</h1>
                  <h2 />
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
                        <Input type="textarea" name="text" id="exampleText" />
                      </FormGroup>
                      <FormGroup>
                        <Button size="lg" block>
                          Send
                        </Button>
                      </FormGroup>
                    </Form>
                  </FormWrapper>
                </ServiceItem>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <ServiceItem>
                  <Img sizes={this.props.image.sizes} />
                </ServiceItem>
              </div>
            </div>
          </div>
        </ContactContainer>
      </Wrapper>
    );
  }
}
