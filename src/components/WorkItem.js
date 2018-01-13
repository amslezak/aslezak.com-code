import React, { Component } from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import { Tooltip } from "react-tippy";

const Wrapper = styled.div``;

const Header = styled.div`
  margin: 0;

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
  margin: 100px 0;

  @media (max-width: 768px) {
    margin: 50px 0;
  }

  @media (max-width: 375px) {
    margin: 75px 0;
  }

  h1 {
    font-size: 20px;
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

  @media (max-width: 375px) {
    padding: 0;
    margin: px;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  background-color: #eeeeee;
  padding: 25px;
  border-radius: 5px;
  margin: 25px 0;
  transition: 0.2s;
  box-shadow: 0px 0px #fff, 0px 1px 2px grey;

  @media (max-width: 375px) {
    padding: 10px;
  }

  &:hover {
    box-shadow: 0px 0px #f5f5f5, 0px 2px 2px #9e9e9e;
    transition: 0.2s;
    transform: scale(0.7);
    transform: translate(0px, 1px);
  }
  &:active {
    box-shadow: 0px 1px 5px #757575, 0px 1px 5px #eeeeee;
    transition: 0.2s;
    transform: translate(0px, 2px);
    > img {
      transform: scale(1.7);
    }


`;

const Paper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin: 50px 0;
  padding: 100px;

  box-shadow: 0px 1px 5px #757575, 0px 0px 10px #eeeeee;
  background-color: #fafafa;

  @media (max-width: 768) {
    margin: 50px 0;
    padding: 0px;
  }

  @media (max-width: 414px) {
    margin: 0;
    padding: 25px;
  }
`;

class componentName extends Component {
  render() {
    return (
      <Wrapper>
        <div class="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
              <Paper>
                <Header>
                  <h1>GALLERY</h1>
                  <h2>WORK</h2>
                </Header>
                {this.props.data.map(item => {
                  let re = new RegExp(item.workImage);

                  return (
                    <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                      <Item>
                        <Tooltip
                          title={item.workSubtitle}
                          position="bottom"
                          trigger="click"
                          theme="transparent"
                          animation="fade"
                          distance="-0.5"
                          arrow="true"
                        >
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
                          <div className="row center-md center-sm center-xs center-lg">
                            <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                              <h1>{item.workTitle}</h1>
                            </div>
                          </div>
                        </Tooltip>
                      </Item>
                    </div>
                  );
                })}
              </Paper>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default componentName;
