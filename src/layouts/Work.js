import React from "react";
import { Layout, Card } from "antd";
import stylesheet from "antd/dist/antd.min.css";
const { Header, Content, Sider } = Layout;
import { Grid, Row, Col } from "react-flexbox-grid";

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
          }

          .service_container img {
            height: auto;
            width: auto;
            max-width: 15rem;
            max-height: 15rem;
          }

          .service_container h5 {
            /* CLOUD: */
            font-family: AvenirNext-Bold, sans-serif
            font-size: 16px;
            color: #e4e4e4;
            letter-spacing: 1.17px;
            line-height: 32px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }

          .service_container h2 {
            /* DESIGN: */
            font-family: sans-serif;
            font-size: 24px;
            color: #e4e4e4;
            letter-spacing: 1.17px;
            line-height: 32px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }

          .section_header h1 {
            font-family: "Montserrat", sans-serif;
            font-size: 48px;
            color: #ffffff;
            line-height: 63px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
          }

          .section_header h2 {
            font-family: Arvo;
            font-size: 36px;
            color: #ffffff;
            letter-spacing: 0.58px;
            line-height: 50px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }

          .work_wrapper > h1 {
            font-family: "Montserrat", sans-serif;
            font-size: 48px;
            color: #ffffff;
            line-height: 63px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.47);
          }
        `}</style>

        <div className="work_wrapper">
          <Grid fluid>
            <div className="section_header">
              <Row>
                <Col>
                  <h1>WORK</h1>
                  <h2>Services Offered</h2>
                </Col>
              </Row>
            </div>

            <Row center="xs" center="lg" center="md">
              <div className="service_container">
                <Col xs={24} md={8} lg={12}>
                  <h2>Design</h2>
                  <img src="/static/img/work/design.png" />
                  <h5>TEST</h5>
                </Col>
              </div>
              <div className="service_container">
                <Col xs={24} md={8} lg={12}>
                  <h2>Code</h2>
                  <img src="/static/img/work/code.png" />
                  <h5>TEST</h5>
                </Col>
              </div>
            </Row>
            <Row center="xs" middle="xs">
              <div className="service_container">
                <Col xs={24} md={8} lg={12}>
                  <h2>Cloud</h2>
                  <img src="/static/img/work/cloud.png" />
                  <h5>TEST</h5>
                </Col>
              </div>
              <div className="service_container">
                <Col xs={24} md={8} lg={12}>
                  <h2>IoT</h2>
                  <img src="/static/img/work/iot.png" />
                  <h5>TEST</h5>
                </Col>
              </div>
            </Row>
          </Grid>
        </div>
      </Layout>
    );
  }
}
