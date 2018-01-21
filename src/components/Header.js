import styled from "react-emotion";

const Header = styled.div`
  h1 {
    font-family: ${props => props.theme.h1.font};
    font-size: ${props => props.theme.h1.size};
    color: ${props => props.theme.h1.color};
    letter-spacing: 0.1px;
    line-height: 63px;
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

export default Header;
