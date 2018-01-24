import styled from "react-emotion";
import Heading from "rebass";
import {
  space,
  width,
  fontSize,
  borderRadius,
  borderWidth,
  borderColor
} from "styled-system";

const Component = styled.Heading`
  ${space};
  ${width};
  ${fontSize};
  ${borderColor};
  ${borderWidth};
  text-transform: uppercase;
  font-family: ${props => props.theme.headerDark.font};
  font-weight: ${props => props.theme.headerDark.fontWeight};
`;

export default Component;
