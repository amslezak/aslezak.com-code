import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import Link from "gatsby-link";

const Wrapper = styled.Wrapper`
  border-style: solid;
`;

const Header = styled.div`
  padding: 100px 0;

  h1 {
    font-family: AvenirNext-Bold;
    font-size: 24px;
    color: #626262;
    letter-spacing: 1.65px;
    line-height: 33px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 18px;
    color: #3ea6b2;
    letter-spacing: 0.65px;
    line-height: 25px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
`;

export default class HeroOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}
