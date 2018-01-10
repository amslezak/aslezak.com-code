import React, { Component } from "react";
import styled from "react-emotion";
import Img from "gatsby-image";

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Header = styled.div`
  margin-bottom: 50px;

  > h1 {
    text-transform: uppercase;
    font-family: AvenirNext-Bold;
    font-size: 28px;
    color: #404040;
    letter-spacing: 1.25px;
    line-height: 37px;
    padding: 0;
    margin: 0;
  }

  > h2 {
    text-transform: uppercase;
    font-size: 18px;
    color: #3ea6b2;
    letter-spacing: 1.25x;
    line-height: 24px;
    padding: 0 0;
    margin: 0;
  }
`;

const Item = styled.div`
  padding: 0;
  margin: 0;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 1.25px
    text-transform: uppercase;
    padding: 10px 0 15px 0 ;
    margin-top: -10px
    color: HSLA(0, 0%, 25%, 1);
  }

  h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400
    letter-spacing: 1.15px
    color: HSLA(0, 0%, 50%, 1);
    margin: 10px 100px 100px 100px;
  }
`;

const ImageBorder = styled.div`
  margin: 0px 10px;
  border-radius: 25px;
`;

const ImageWrapper = styled.div`
  background-color: HSLA(0, 0%, 92%, 1);
  border: solid 0.5px RGBA(255, 255, 255, 0.5);
  border-radius: 25px
  overflow: hidden;
  margin: 50px
  padding-top: 15px; 
  box-shadow: 0px -1px #fff, 0px 1px 3px grey;
`;

class componentName extends Component {
  render() {
    return (
      <Wrapper>
        <div class="container">
          <Header>
            <h1>GALLERY</h1>
            <h2>WORK</h2>
          </Header>
          <div className="row center-lg">
            {this.props.data.map(item => {
              let re = new RegExp(item.workImage);

              return (
                <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6 hvr-grow">
                  <Item>
                    <ImageBorder>
                      <ImageWrapper>
                        <Img
                          sizes={
                            this.props.portfolio.edges.filter(item => {
                              return re.test(item.node.sizes.src);
                            })[0].node.sizes
                          }
                        />
                      </ImageWrapper>
                    </ImageBorder>
                    <h1>{item.workTitle}</h1>
                    <h2>{item.workSubtitle}</h2>
                  </Item>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default componentName;
