import styled from "react-emotion";
import {
  space,
  width,
  fontSize,
  letterSpacing,
  lineHeight
} from "styled-system";

const Component = styled.span`
  ${space};
  ${width};
  ${fontSize};
  ${letterSpacing};
  ${lineHeight};
  text-transform: uppercase;
  font-family: ${props => props.theme.subHeaderDark.font};
  font-weight: ${props => props.theme.subHeaderDark.fontWeight};
  color: ${props => props.theme.subHeaderDark.color};
`;

export default Component;
