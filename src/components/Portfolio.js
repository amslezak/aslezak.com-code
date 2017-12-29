import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="work_wrapper">
        <div className="service_container">
          <h2>Design</h2>
          <img src="/static/img/portfolio/WEAVE.png" />
          <h5>TEST</h5>
        </div>
        <div className="service_container">
          <h2>Code</h2>
          <img src="/static/img/portfolio/CHECKOUT.png" />
          <h5>TEST</h5>
        </div>
        <div className="service_container">
          <h2>Cloud</h2>
          <img src="/static/img/portfolio/CYTEXONE.png" />
          <h5>TEST</h5>
        </div>
      </div>
    );
  }
}
