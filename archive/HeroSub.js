import React from "react";

import { Layout, Menu, Breadcrumb, Icon, Card } from "antd";
import { Grid, Row, Col } from "react-flexbox-grid";
import stylesheet from "antd/dist/antd.min.css";
const { Header, Content, Sider } = Layout;

export default class App extends React.Component {
  render() {
    return (
      //   <Grid fluid>
      <Row>
        <Col xs={12}>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <style jsx>{`
            .subHero {
              font-family: sans-serif
              background-color: #fafafa
              background-size: cover;
              height: 250px;
              margin-bottom: 25px
            }

            .subHero > h1 {
              font-size: 18px;
              color: #3EA6B2;
              letter-spacing: 1.1px;
              line-height: 24px;
              padding: 5px 25px
            }

            .subHero > h2 {
              font-family: Arvo;
              font-size: 16px;
              font-weight:200;
              color: #3EA6B2;
              letter-spacing: 0.49px;
              line-height: 23px;
              padding: 5px 25px;
              margin-bottom: 10px;
            }

          `}</style>

          <div className="subHero">
            <h1>SubHero Title</h1>
            <h2>
              Firstly, web design consists of a slew of coding standards,
              frameworks, build tools, and much more. Secondly, you add the
              actual graphics the end-user sees. Third, you combine the two and
              create a symphony. The below tools help me play maestro for the
              the orchestra, to provide for a pleasant web experience.
            </h2>
          </div>
        </Col>
      </Row>
      //   </Grid>
    );
  }
}
