import styled from "react-emotion";
import { space, width, borderRadius } from "styled-system";

const Icon = styled.div`
  ${space};
  ${width};
  ${borderRadius};

  border: solid 0.6px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
  z-index: 0;

  background-color: rgba(255, 255, 255, 1);
  background: @include filter-gradient(#ffffff, #b3b3b3, vertical);
  background: @include
    background-image(
      linear-gradient(
        top,
        rgba(255, 255, 255, 1) 0%,
        rgba(246, 246, 246, 1) 47%,
        rgba(179, 179, 179, 1) 100%
      )
    );
`;

export default Icon;
