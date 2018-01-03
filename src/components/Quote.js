import React from "react";
import styled from "react-emotion";
import "animate.css";

const Wrapper = styled.div`
  background-color: hsla(0, 0%, 98%, 1);
  padding: 250px 0;
  @media (max-width: 700px) {
    padding: 50px;
  }
`;

const Quote = styled.div`
  color: #4e4e4e;
  letter-spacing: 0.75px;
  line-height: 47px;
  text-align: justify;
  font-size: 36px;
  font-weight: 700;
  font-family: "Source Serif Pro", "EB Garamond", "Alegreya", "Source Serif Pro",
    serif;
  text-shadow: 0 1px 1px #fff;
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
`;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row center-lg">
            <div className="col-xs col-sm col-md col-lg-10 animated fadeIn">
              <Quote>
                The real voyage of discovery consists not in seeking new
                landscapes, but in having new eyes.
              </Quote>
            </div>
          </div>
          <div className="row center-lg">
            <div className="col-xs col-sm col-md col-lg-10">
              <Author>Marcel Proust</Author>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
