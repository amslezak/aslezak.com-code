import styled from "react-emotion"
import {
  space,
  width,
  fontSize,
  letterSpacing,
  lineHeight,
  alignSelf,
} from "styled-system"

const Component = styled.span`
  ${space};
  ${width};
  ${fontSize};
  ${letterSpacing};
  ${lineHeight};
  ${alignSelf};
  font-family: Arvo, Helvetica, sans-serif;
  font-weight: ${props => props.theme.subHeaderLight.fontWeight};
  color: ${props => props.theme.subHeaderLight.color};
  text-shadow: rgba(0, 0, 0, 0.85) 0px 2px 10px;
`

export default Component
