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
          <Row type="flex" align="right" justify="right">
            <div className="service_container">
              <Col span={24}>
                <img
                  style={{ height: "250px" }}
                  src="/static/img/footer/TYPEWRITER.png"
                />
              </Col>
            </div>
          </Row>
        </div>
      </Layout>
    );
  }
}
