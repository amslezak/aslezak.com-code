import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import { Link } from "react-scroll";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";

import Header from "../components/Header";

const Wrapper = styled.div`
  padding: 150px 0;

  background-color: #f8f8fb;
  border-top: 1px solid RGBA(67, 166, 177, 0.05);
  border-bottom: 1px solid RGBA(67, 166, 177, 0.05);

  @media (max-width: 768px) {
    height: 83vh;
    padding: 25px;
  }

  @media (max-width: 414px) {
    height: 100%;
  }
`;

const Body = styled.div`
  font-size: 18px;
  line-height: 29px;
  letter-spacing: 0.9px;
  text-align: justify;

  h6 {
    text-transform: uppercase;
    font-size: 18px;
    color: #3ea6b2;
    letter-spacing: 0.5px;
    line-height: 29px;
    padding: 0;
    margin: 25px 0;
  }

  @media (max-width: 768px) {
    padding: 0 5px 0 0;
    margin: 0 0 5px 0;
  }

  @media (max-width: 414px) {
    letter-spacing: 1.1px;
  }
`;

const Signature = styled.div`
  padding-right: 25px;
  margin-right: 25px;
  margin-bottom: -25px;

  @media (max-width: 375px) {
    padding: 0;
    margin: 0;
  }
`;

const ContactLink = styled.a`
  font-weight: 600;
  cursor: pointer;
  transition-duration: 0.2s;
  text-decoration: underline;

  &:hover {
    transition-duration: 0.2s;
    text-decoration: underline;
    text-decoration-color: red;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <div className="container">
            <div className="row">
              <Header>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h1>HELLO</h1>
                </div>
              </Header>

              <Body>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-11">
                  <p>
                    I'm Andy. I'm a web developer. In a previous life, my best
                    friend and I started a company called CytexOne. It focused
                    on IoT and Smart Home Automation. It lasted 15 years. I'm
                    proud of the team & company that we built. Sadly, we had to
                    shut our doors.
                  </p>
                  <p>
                    Now, I am taking my professional journey solo. I would love
                    to bring my passion and skills to a new & exciting company.
                    If you're doing something clever with technology, then I'm
                    looking to work with you. Thank you for looking around, and
                    please{" "}
                    <Link
                      to="contact"
                      smooth={true}
                      duration={1500}
                      offset={-100}
                      animation="easeInOutQuart"
                    >
                      <ContactLink>contact</ContactLink>
                    </Link>{" "}
                    me if we can work together.
                  </p>
                  <h6>A DEDICATION</h6>
                  <p>
                    This site is dedicated to my mom and dad. To my dad because
                    he gave me the gifts of patience & learning. To my mom
                    because she gave me the gifts of persistence & love.
                  </p>
                </div>
              </Body>
            </div>
            <div className="row end-xs end-md end-lg">
              <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
                <Signature>
                  <Img sizes={this.props.logo.sizes} />
                </Signature>
              </div>
            </div>
          </div>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
