import { Layout, Menu, Breadcrumb, Icon, Row, Col, Card } from "antd";
import stylesheet from "antd/dist/antd.min.css";
const { Header, Content, Sider } = Layout;
import React from "react";
export default class App extends React.Component {
  render() {
    return (
      <Row>
        <Col span={24} type="flex">
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div className="hero">
            <Card
              bordered={false}
              cover={<img alt="example" src="/static/img/hero/HERO-IMG.jpg" />}
            />
          </div>
        </Col>
      </Row>
    );
  }
}
