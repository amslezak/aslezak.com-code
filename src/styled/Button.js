import styled from "react-emotion";
import Button from "rebass";
import {
  space,
  width,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlign,
  alignSelf,
  borderRadius
} from "styled-system";

const Component = styled.span`
  ${space};
  ${width};
  ${fontSize};
  ${letterSpacing};
  ${lineHeight};
  ${textAlign};
  ${alignSelf};
  ${borderRadius};
  text-transform: uppercase;
  font-family: ${props => props.theme.headerLight.font};
  font-weight: ${props => props.theme.button.fontWeight};
  background-color: ${props => props.theme.button.backgroundColor};
  color: ${props => props.theme.headerLight.color};
  box-shadow: ${props => props.theme.button.boxShadow};
  text-shadow: rgba(0, 0, 0, 0.47) 0px 2px 4px;
`;

export default Component;
