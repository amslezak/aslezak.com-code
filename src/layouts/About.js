import { Layout, Row, Col, Card } from "antd";
import stylesheet from "antd/dist/antd.min.css";
const { Header, Content, Sider } = Layout;
// import Router from "next/router";
import React from "react";
export default class App extends React.Component {
  render() {
    return (
      <Row>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style jsx>{`
          .about {
            text-align: right;
          }
          .about_wrapper {
          }
        `}</style>

        <div className="about_wrapper">
          <Col span={8} type="flex">
            <div className="about">
              <Card bordered={false}>
                <div style={{ padding: "30px 0" }}>
                  <h1>ABOUT</h1>
                  <h4>My Journey</h4>
                </div>
              </Card>
            </div>
          </Col>

          <Col span={16} type="flex">
            <div className="about_content">
              <Card bordered={false}>
                <div style={{ padding: "30px 0" }}>
                  <p>
                    Vestibulum rutrum quam vitae fringilla tincidunt.
                    Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis
                    iaculis nulla iaculis vitae. Donec sagittis faucibus lacus
                    eget blandit. Mauris vitae ultricies metus, at condimentum
                    nulla. Donec quis ornare lacus. Etiam gravida mollis tortor
                    quis porttitor.
                  </p>
                </div>
              </Card>
            </div>
          </Col>
        </div>
      </Row>
    );
  }
}
