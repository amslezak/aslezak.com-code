import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import logoSignature from "../images/skills/about/logoSignature.png";

const Wrapper = styled.div`
  padding: 150px 0 200px 0;

  background-color: #f8f8fb;
  border-top: 1px solid RGBA(67, 166, 177, 0.05);
  border-bottom: 1px solid RGBA(67, 166, 177, 0.05);

  @media (max-width: 700px) {
    padding: 50px;
  }
`;

const Header = styled.div`

h1 {
  font-family: AvenirNext-Bold;
  font-size: 48px;
  color: #4E4E4E;
  letter-spacing: 0.83px;
  line-height: 63px; 

}

h2 {
text-transform: uppercase;
font-size: 18px;
color: #3EA6B2;
letter-spacing: 0.5px;
line-height: 24px;
padding: 0;
margin: 0;
}


  @media (max-width: 700px) {
    padding-bottom: 50px
    margin: 0
  }
`;

const Body = styled.div`
  h6 {
    font-size: 18px;
    color: #161616;
    line-height: 28px;
    text-align: justify;
    text-justify: inter-word;
    margin-top: 25px;

    @media (max-width: 992px) {
    }
  }
`;

const Signature = styled.div`
  padding-right: 25px;
  margin-right: 25px;
  margin-bottom: -25px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row middle-lg">
            <Header>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>ABOUT</h1>
                <h2>My Journey</h2>
              </div>
            </Header>

            <Body>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-11">
                <h6>
                  <p>
                    Vestibulum rutrum quam vitae fringilla tincidunt.
                    Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis
                    iaculis nulla iaculis vitae. Donec sagittis faucibus lacus
                    eget blandit. Mauris vitae ultricies metus, at condimentum
                    nulla. Donec quis ornare lacus. Etiam gravida mollis tortor
                    quis porttitor.
                  </p>

                  <h6>DEDICATION</h6>
                  <p>
                    This site is dedicated to my mom and dad. To my dad because
                    he taught me how to teach myself, and to always continue
                    learn. To my mom for teaching me dogged persistance and
                    living with compassion.
                  </p>
                </h6>
              </div>
            </Body>
          </div>
          <div className="row end-lg">
            <div className="col-xs-3 col-sm-3 col-md-4 col-lg-3">
              <Signature>
                <Img sizes={this.props.logo.sizes} />
              </Signature>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
