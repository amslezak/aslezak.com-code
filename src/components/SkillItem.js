import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import Link from "gatsby-link";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
const Wrapper = styled.Wrapper`
  border-style: solid;
`;

export default class SkillItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allItems = this.props.items.map(item => {
      return (
        <Wrapper>
          <Wrapper className="col-xs-12 col-sm-3 col-md-6 col-lg-6">
            <h5>{item.itemTitle}</h5>
            <h6>{item.itemSubtitle}</h6>
            <img src={item.itemImage} />
          </Wrapper>
        </Wrapper>
      );
    });

    return <Wrapper>{allItems}</Wrapper>;
  }
}
