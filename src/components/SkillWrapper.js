import React from "react";
import SkillItem from "./SkillItem";
import styled from "react-emotion";
import Img from "gatsby-image";
import "react-tippy/dist/tippy.css";

import { Tooltip } from "react-tippy";

const Wrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin: 50px 0;
  padding: 50px;

  box-shadow: 0px 1px 5px #757575, 0px 0px 10px #eeeeee;
  background-color: #fafafa;

  @media(max-width: 414px) {
    padding: 0;
    margin: 0:
  }
`;

const Header = styled.div`
  padding: 25px;

  h1 {
    text-transform: uppercase;
    font-family: AvenirNext-Bold;
    font-size: 24px;
    color: #404040;
    letter-spacing: 1.25px;
    line-height: 39px;
    padding: 0;
    margin: 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 18px;
    color: #3ea6b2;
    letter-spacing: 1px;
    line-height: 29px;
    padding: 0;
    margin: 0 0 5px 0;
  }

  @media (max-width: 414px) {
    margin: 0;
    padding: 25px;

    h2 {
      padding: 0;
      margin: 0;
    }
  }
`;

const Items = styled.div`
  padding: 25px;

  h1 {
    font-size: 16px;
    letter-spacing: -0.15px;
    text-align: center;
    line-height: 26px;
  }

  h2 {
    font-size: 16px;
  }
`;

const Item = styled.div`
  padding: 15px 0px 30px 0;
  margin: 0 0 10px 0;

  min-width: 200px;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 15px 0;
  }

  @media (max-width: 414px) {
    min-width: 150px;
  }
`;

const ImgWrapper = styled.div`
  border: solid 1px #e0e0e0;
  background-color: HSLA(0, 0%, 92%, 1);
  border-radius: 15px;
  padding: 0px 0 0 5px;
  margin-bottom: 25px;
  box-shadow: 0px -1px #fff, 0px 1px 2px #f5f5f5;
  transition: 0.1s;

  &:hover {
    box-shadow: 0px -1px #f5f5f5, 0px 1px 2px #9e9e9e;
    transition: 0.1s;
    transform: scale(0.7);
    transform: translate(0px, 1px);
  }
  &:active {
    box-shadow: 0px 1px 5px #757575, 0px 0px 10px #eeeeee;
    transition: 0.1s;
    > img {
      transform: scale(1.7);
      transform: translate(0px, 1px);
    }

    @media (max-width: 375px) {
    }
`;

export default class SkillWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.logos = props.logos.edges;

    this.myImage = this.logos.filter(logo => {
      return /node/.test(logo.node.sizes.src);
    });

    this.skillItems = this.props.skillItems.map((item, index) => {
      return (
        <div>
          <Header>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                <h1>{item.sectionTitle}</h1>
                <h2>{item.sectionSubtitle}</h2>
              </div>
            </div>
          </Header>
          <Items>
            <div className="row center-xs start-lg center-md">
              {item.sectionItems.map(item => {
                return (
                  <Item>
                    <div className="col-xs-12 col-sm-10 col-md-12 col-lg-10">
                      <Tooltip
                        title={item.itemSubtitle}
                        position="bottom"
                        trigger="click"
                        theme="transparent"
                        animation="fade"
                        distance="-0.5"
                        arrow="true"
                      >
                        <ImgWrapper>
                          <Img
                            sizes={
                              this.props.logos.edges.filter(skill => {
                                let regex = new RegExp(item.itemImage);
                                let img = regex.test(skill.node.sizes.src);
                                return img;
                              })[0].node.sizes
                            }
                          />
                        </ImgWrapper>
                        <h1>{item.itemTitle}</h1>
                      </Tooltip>
                    </div>
                  </Item>
                );
              })}
            </div>
          </Items>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Wrapper>{this.skillItems}</Wrapper>
      </div>
    );
  }
}
