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

const LinkWrapper = styled.span`
  ${space};
  ${width};
  ${fontSize};
  ${letterSpacing};
  ${lineHeight};
  ${textAlign};
  ${alignSelf};
  font-weight: 500;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
  > a {
    color: #43a6b1;
  }
`;

export default LinkWrapper;
