import React from "react";
import styled from "react-emotion";
import "animate.css";

const Wrapper = styled.div`
  background-color: hsla(0, 0%, 98%, 1);
  padding: 250px 0;
  @media (max-width: 700px) {
    padding: 50px;
  }
  @media (max-width: 768px) {
    padding: 150px 50px;
  }

  @media (max-width: 375px) {
    padding: 50px;
  }
`;

const Quote = styled.div`
  color: #4e4e4e;
  line-height: 47px;
  text-align: justify;
  font-size: 36px;
  font-weight: 700;
  font-family: "Source Serif Pro";
    serif;
  text-shadow: 0 1px 1px #fff;

  @media (max-width: 414px) {
  text-align: center;
  font-size: 24px;
  line-height: 39px;
  letter-spacing: 1.15px;
  }

`;

const Author = styled.div`
  padding-top: 15px;
  text-align: right;
  font-size: 20px;
  font-weight: 500;
  color: #3ea6b2;
  letter-spacing: 0.5px;
  line-height: 32px;
  text-shadow: 0 1px 1px #fff;
  text-transform: uppercase;

  @media (max-width: 414px) {
    margin 10px 0 0 0;
    text-align: center;
  }
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row center-lg">
            <div className="col-xs col-sm col-md col-lg-10 animated fadeIn">
              <Quote>{this.props.quotes.quote}</Quote>
            </div>
          </div>
          <div className="row center-lg">
            <div className="col-xs col-sm col-md col-lg-10">
              <Author>{this.props.quotes.author}</Author>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
