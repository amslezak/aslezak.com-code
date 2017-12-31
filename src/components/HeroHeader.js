import React from "react";
import Img from "gatsby-image";
import styled from "react-emotion";

const HeroText = styled.div`
  h1 {
    font-family: AvenirNext-Bold;
    font-size: 48px;
    color: #ffffff;
    line-height: 63px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
    text-transform: uppercase;
  }

  h2 {
    /* Web magic made with: */
    font-family: Arvo;
    font-size: 36px;
    color: #ffffff;
    letter-spacing: -0.42px;
    line-height: 50px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const HeroImg = styled.Wrapper``;

export default class HeroHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <HeroText>
              <h1>{this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>
            </HeroText>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <Img sizes={this.props.image.sizes} />
          </div>
        </div>
      </div>
    );
  }
}
