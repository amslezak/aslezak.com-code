import React from "react";
import SkillItem from "./SkillItem";
import styled from "react-emotion";
import Img from "gatsby-image";

const Header = styled.div`
  padding: 50px 0 25px 0;
  h1 {
    text-transform: uppercase;
    font-family: AvenirNext-Bold;
    font-size: 24px;
    color: #404040;
    letter-spacing: 1.17px;
    line-height: 32px;
    padding: 0;
    margin: 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 18px;
    color: #3ea6b2;
    letter-spacing: 0.5px;
    line-height: 24px;
    padding: 0;
    margin: 0;
  }
`;

const Items = styled.div`
  padding-bottom: 50px;

  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 16px;
  }
`;

const Item = styled.div`
  padding: 50px 100px 0 0;
`;

export default class SkillWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.logos = props.logos.edges;

    // console.log("logos array", this.logos);

    this.myImage = this.logos.filter(logo => {
      return /node/.test(logo.node.sizes.src);
    });

    // console.log("test", this.myImage);

    this.skillItems = this.props.skillItems.map(item => {
      return (
        <div>
          <Header>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-12 col-lg-4">
                <h1>{item.sectionTitle}</h1>
                <h2>{item.sectionSubtitle}</h2>
              </div>
            </div>
          </Header>

          <Items>
            <div className="row">
              {item.sectionItems.map(item => {
                return (
                  <Item>
                    <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                      <h1>{item.itemTitle}</h1>
                      <h2>{item.itemSubtitle}</h2>
                      <Img
                        sizes={
                          this.props.logos.edges.filter(skill => {
                            let regex = new RegExp(item.itemImage);
                            let img = regex.test(skill.node.sizes.src);

                            return img;
                          })[0].node.sizes
                        }
                      />
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
    return <div className="container">{this.skillItems}</div>;
  }
}
