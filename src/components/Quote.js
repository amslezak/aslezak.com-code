import React from "react";
import styled from "react-emotion";

const Wrapper = styled.div`
  background: #fcfcfc;
  padding: 125px 0 50px 0;
  @media (max-width: 700px) {
    padding: 50px;
  }
`;

const Quote = styled.div`
  color: #3ea6b2;
  letter-spacing: -1.15px;
  line-height: 65px;
  text-align: justify;
  font-size: 48px;
  font-weight: 100px;
`;

const Author = styled.div`
  padding: 100px 0;
  font-size: 24px;
  font-weight: 700;
  color: #3ea6b2;
  letter-spacing: 0.25px;
  line-height: 32px;
  text-transform: uppercase;
`;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row center-lg">
            <div className="col-xs col-sm col-md col-lg-8">
              <Quote>
                The real voyage of discovery consists not in seeking new
                landscapes, but in having new eyes.
              </Quote>
            </div>
          </div>
          <div className="row center-lg">
            <div className="col-xs col-sm col-md col-lg-8">
              <Author>- Marcel Proust</Author>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
