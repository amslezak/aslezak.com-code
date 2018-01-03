import React from "react";
import SkillItem from "./SkillItem";
import styled from "react-emotion";
import Img from "gatsby-image";

const Wrapper = styled.div``;

const Header = styled.div`
  padding: 15px 0 15px 0;

  h1 {
    text-transform: uppercase;
    font-family: AvenirNext-Bold;
    font-size: 28px;
    color: #404040;
    letter-spacing: 1.25px;
    line-height: 37px;
    padding: 0;
    margin: 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 18px;
    color: #3ea6b2;
    letter-spacing: 1px;
    line-height: 24px;
    padding: 0;
    margin: 0;
  }
`;

const Items = styled.div`

  h1 {
    font-size: 20px;
    letter-spacing: .8px;
    margin: -25px
    text-align: center;
  }

  h2 {
    font-size: 16px;
  }
`;

const Item = styled.div`
  padding: 25px 100px 50px 0;
  min-width: 300px;
`;

const Hr = styled.hr`
  display: block


  &:nth-of-type(1) {
    display: none;
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
      let bgColor;

      if (index % 2 == 0) {
        bgColor = "#fff";
      } else {
        bgColor = "#f6f6f6";
      }

      let row = {
        backgroundColor: bgColor
      };

      return (
        <section>
          <Header>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
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
                      <Img
                        sizes={
                          this.props.logos.edges.filter(skill => {
                            let regex = new RegExp(item.itemImage);
                            let img = regex.test(skill.node.sizes.src);
                            return img;
                          })[0].node.sizes
                        }
                      />
                      <h1>{item.itemTitle}</h1>
                    </div>
                  </Item>
                );
              })}
            </div>
          </Items>
          <hr style={{ margin: "50px 0" }} />
        </section>
      );
    });
  }

  render() {
    return <div className="container">{this.skillItems}</div>;
  }
}
