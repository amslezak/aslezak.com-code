import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import Link from "gatsby-link";

const Wrapper = styled.div`
  padding: 100px 0;
  background-color: #f8f8fb;
  border-bottom: 1px solid RGBA(67, 166, 177, 0.05);
`;

const Header = styled.div`
  h1 {
    font-family: AvenirNext-Bold;
    font-size: 24px;
    color: #626262;
    letter-spacing: 2px;
    line-height: 33px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 18px;
    color: #3ea6b2;
    letter-spacing: 0.65px;
    line-height: 26px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.58);
    line-height: 26px;
    text-align: justify;
    text-justify: inter-word;
    margin-top: 25px;
  }
`;

export default class HeroOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-10">
                <div>
                  <h1>{this.props.title}</h1>
                  <h2>{this.props.subtitle}</h2>
                  <h3>
                    Vestibulum rutrum quam vitae fringilla tincidunt.
                    Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis
                    iaculis nulla iaculis vitae. Donec sagittis faucibus lacus
                    eget blandit. Mauris vitae ultricies metus, at condimentum
                    nulla. Donec quis ornare lacus. Etiam gravida mollis tortor
                    quis porttitor.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Header>
      </Wrapper>
    );
  }
}
