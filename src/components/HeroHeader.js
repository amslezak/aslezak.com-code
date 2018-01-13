import React from "react";
import Img from "gatsby-image";
import styled from "react-emotion";

const HeroWrapper = styled.div`
  @media (max-width: 1440px) {
    height: 55vh;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    height: 40vh;
  }

  @media (max-width: 414px) {
    margin: 0;
    padding: 0;
    height: 75vh;
  }
`;

const HeroText = styled.div`
  h1 {
    font-family: AvenirNext-Bold;
    font-size: 64px;
    color: #ffffff;
    line-height: 116px;
    letter-spacing: 1.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
    text-transform: uppercase;
  }

  h2 {
    font-family: Arvo;
    font-size: 36px;
    color: #ffffff;
    letter-spacing: -0.42px;
    line-height: 45px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1440px) {
    margin: 20vh 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    margin: 50px 0 0 0;
    padding: 50px 0 0 25px;
  }

  @media (max-width: 414px) {
    margin: 0;
    padding: 0 15px;

    h1 {
      padding: 15px 0 0 0;
      font-size: 48px;
      line-height: 78px;
    }

    h2 {
      font-size: 24px;
      line-height: 39px;
    }
  }
`;

const ImageWrapper = styled.div`

  @media (max-width: 1440px) {
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
  padding: 50px 0 0 0;
}

@media (max-width: 414px) {
  margin: -25px 0;
  padding: 25px
}

`;

export default class HeroHeader extends React.Component {
  constructor(props) {
    super(props);
    this.heroImage = props.heroImage;
  }

  render() {
    return (
      <HeroWrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
              <HeroText>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
              </HeroText>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
              <ImageWrapper>
                <Img
                  sizes={
                    this.props.logos.edges.filter(item => {
                      let re = new RegExp(this.heroImage);
                      return re.test(item.node.sizes.src);
                    })[0].node.sizes
                  }
                />
              </ImageWrapper>
            </div>
          </div>
        </div>
      </HeroWrapper>
    );
  }
}
