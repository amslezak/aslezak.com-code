import styled from "react-emotion";
import Heading from "rebass";
import {
  space,
  width,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlign,
  alignSelf
} from "styled-system";

const Component = styled.Heading`
  ${space};
  ${width};
  ${fontSize};
  ${letterSpacing};
  ${lineHeight};
  ${textAlign};
  ${alignSelf};
  text-transform: uppercase;
  font-family: ${props => props.theme.headerLight.font};
  font-weight: ${props => props.theme.headerLight.fontWeight};
  color: ${props => props.theme.headerLight.color};
  text-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;
`;

export default Component;
