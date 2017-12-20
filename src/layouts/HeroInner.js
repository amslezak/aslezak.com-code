import React from "react";

import { Layout, Menu, Breadcrumb, Icon, Card } from "antd";
import { Grid, Row, Col } from "react-flexbox-grid";
import stylesheet from "antd/dist/antd.min.css";
const { Header, Content, Sider } = Layout;

export default class App extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <style jsx>{`
            .innerHero {
              background: url("/static/img/heroInner/hero-inner.jpg") center
                center no-repeat;
              background-size: cover;
              height: 250px;
            }
          `}</style>
          <div className="innerHero">
            <img
              style={{ height: "250px", float: "right" }}
              src="/static/img/heroInner/Portfolio.png"
            />
          </div>
        </Col>
      </Row>
    );
  }
}
