import React from "react";
import styled from "react-emotion";

const Wrapper = styled.div`
  background: #fcfcfc;
  padding: 100px 0;

  @media (max-width: 700px) {
    padding: 50px;
  }
`;

const Header = styled.div`

h1 {
  font-family: AvenirNext-Bold;
  font-size: 48px;
  color: #4E4E4E;
  letter-spacing: 0.83px;
  line-height: 63px; 

}

h2 {
text-transform: uppercase;
font-size: 18px;
color: #3EA6B2;
letter-spacing: 0.5px;
line-height: 24px;
padding: 0;
margin: 0;
}


  @media (max-width: 700px) {
    padding-bottom: 50px
    margin: 0
  }
`;

const Body = styled.div`
  h6 {
    font-size: 18px;
    color: #161616;
    line-height: 28px;
    text-align: justify;
    text-justify: inter-word;
    margin-top: 25px;

    @media (max-width: 992px) {
    }
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <Header>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>ABOUT</h1>
                <h2>My Journey</h2>
              </div>
            </Header>

            <Body>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10">
                <h6>
                  Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse
                  nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla
                  iaculis vitae. Donec sagittis faucibus lacus eget blandit.
                  Mauris vitae ultricies metus, at condimentum nulla. Donec quis
                  ornare lacus. Etiam gravida mollis tortor quis porttitor.
                </h6>
              </div>
            </Body>
          </div>
        </div>
      </Wrapper>
    );
  }
}
