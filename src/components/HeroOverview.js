import React from "react";

export default class HeroOverview extends React.Component {
  render() {
    return (
      <div style={{ margin: "10px 0" }}>
        <h3>{this.props.title}</h3>
        <h5>{this.props.subtitle}</h5>
      </div>
    );
  }
}
