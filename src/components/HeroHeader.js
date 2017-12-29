import React from "react";

export default class HeroHeader extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-between"
        style={{ margin: "25px 0" }}
      >
        <div>
          <h1 style={{ textTransform: "uppercase", fontWeight: "700" }}>
            {this.props.title}
          </h1>
          <h5>{this.props.subtitle}</h5>
        </div>
        <div>
          <img style={{ marginRight: "25px" }} src={this.props.image} />
        </div>
      </div>
    );
  }
}
