import { Layout, Row, Col, Card } from "antd";
import stylesheet from "antd/dist/antd.min.css";
const { Header, Content, Sider } = Layout;
import React from "react";
export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style jsx>{`
          .work {
            text-align: right;
          }
          .work_wrapper {
            padding: 24px;
            background: url("/static/img/BACKGROUND.jpg") center center
              no-repeat;
            background-size: cover;
          }

          .service_container {
            // height: 100px;
            // width: 100px;
          }
        `}</style>

        <div className="work_wrapper">
          <Row type="flex" justify="center" align="middle">
            <div className="service_container">
              <Col span={8}>
                <h2>Design</h2>
                <img src="/static/img/portfolio/WEAVE.png" />
                <h5>TEST</h5>
              </Col>
            </div>
            <div className="service_container">
              <Col span={8}>
                <h2>Code</h2>
                <img src="/static/img/portfolio/CHECKOUT.png" />
                <h5>TEST</h5>
              </Col>
            </div>
            <div className="service_container">
              <Col span={8}>
                <h2>Cloud</h2>
                <img src="/static/img/portfolio/CYTEXONE.png" />
                <h5>TEST</h5>
              </Col>
            </div>
          </Row>
        </div>
      </Layout>
    );
  }
}
