import React from "react";
import styled from "react-emotion";

const Wrapper = styled.div`

  background: #fcfcfc;
  background: green;
  border-style: dotted
  padding: 100px 0;

  @media (max-width: 700px) {
    padding: 50px
  }
`;

const Header = styled.div`
  margin: 0 50px 0 100px;
  background: blue
  border-style: dotted

  @media (max-width: 700px) {
    padding-bottom: 50px
    margin: 0
    
  }
`;

const Body = styled.div`
  text-align: justify;
  text-justify: inter-word;
`;

export default class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs col-sm col-md col-lg">
              <Body>
                <h6>
                  Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse
                  nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla
                  iaculis vitae. Donec sagittis faucibus lacus eget blandit.
                  Mauris vitae ultricies metus, at condimentum nulla. Donec quis
                  ornare lacus. Etiam gravida mollis tortor quis porttitor.
                </h6>
              </Body>
            </div>
          </div>
          <div className="row end-xs end-sm end-md end-lg">
            <div className="col-xs col-sm col-md col-lg">Author</div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
