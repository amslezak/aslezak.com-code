import styled from "react-emotion";
import { space, width, borderRadius } from "styled-system";

const Paper = styled.div`
  ${space};
  ${width};
  ${borderRadius};

  border: solid 1px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.05);
  z-index: 0;
  overflow: hidden;
  bacground-color: #fff;
`;

export default Paper;
