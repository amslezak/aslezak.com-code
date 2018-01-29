import styled from "react-emotion";
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

const Component = styled.div`
  ${space};
  ${width};
  ${alignSelf};
  background-color: "#99765E";
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;

  @media (max-width: 414px) {
    transition-duration: 1s;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgba(150, 150, 150, 0.25)
    );
  }

  @media (max-width: 375px) {
    transition-duration: 1s;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.2)
    );
  }
`;

export default Component;
