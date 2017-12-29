import React from "react";

export default class SkillItem extends React.Component {
  render() {
    const allItems = this.props.items.map(item => {
      return (
        <div
          className="d-inline-flex flex-column justify-content- align-items-left"
          style={{ margin: "0 20px 10px 0" }}
        >
          <h5>{item.itemTitle}</h5>
          <h6>{item.itemSubtitle}</h6>
          <img src={item.itemImage} style={{ width: "100px" }} />
        </div>
      );
    });

    return <div>{allItems}</div>;
  }
}
