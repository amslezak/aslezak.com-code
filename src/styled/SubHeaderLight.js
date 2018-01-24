import styled from "react-emotion";
import Heading from "rebass";
import {
  space,
  width,
  fontSize,
  letterSpacing,
  lineHeight,
  alignSelf
} from "styled-system";

const Component = styled.Heading`
  ${space};
  ${width};
  ${fontSize};
  ${letterSpacing};
  ${lineHeight};
  ${alignSelf};
  text-transform: uppercase;
  font-family: ${props => props.theme.subHeaderLight.font};
  font-weight: ${props => props.theme.subHeaderLight.fontWeight};
  color: ${props => props.theme.subHeaderLight.color};
  text-shadow: rgba(0, 0, 0, 0.47) 0px 2px 4px;
`;

export default Component;
