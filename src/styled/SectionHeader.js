import styled from "react-emotion";
import Heading from "rebass";
import {
  space,
  width,
  fontSize,
  letterSpacing,
  lineHeight
} from "styled-system";

const Component = styled.Heading`
  ${space};
  ${width};
  ${fontSize};
  ${letterSpacing};
  ${lineHeight};
  text-transform: uppercase;
  font-family: ${props => props.theme.headerDark.font};
  font-weight: ${props => props.theme.headerDark.fontWeight};
`;

export default Component;
