import React from "react";

import { Layout, Menu, Breadcrumb, Icon, Card } from "antd";
import { Grid, Row, Col } from "react-flexbox-grid";
import stylesheet from "antd/dist/antd.min.css";
import SkillItem from "../layouts/SkillItem";
const { Header, Content, Sider } = Layout;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style jsx>{`
            .skillSection {
              background: white;
              height: 20rem
            }

            .skillSection > h1 {
                /* FUNDAMENTALS: */
                font-family: AvenirNext-Bold;
                font-size: 18px;
                color: #404040;
                letter-spacing: 0.88px;
                padding: 15px 25px 0 25px;
                line-height: 32px;
              }
  
              .skillSection > h2 {
                /* Coding Standards: */
                font-family: Arvo;
                font-size: 18px;
                color: #3EA6B2;
                font-weight:200;
                letter-spacing: 0.21px;
                padding: 5px 0;
                margin: -15px 25px 


          `}</style>
        <Row>
          <Col xs={12}>
            <div className="skillSection">
              <h1>FUNDAMENTALS</h1>
              <h2>Coding Standards</h2>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
