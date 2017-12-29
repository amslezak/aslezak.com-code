import React from "react";

import { Layout, Menu, Breadcrumb, Icon, Card } from "antd";
import { Grid, Row, Col } from "react-flexbox-grid";
import stylesheet from "antd/dist/antd.min.css";
const { Header, Content, Sider } = Layout;

export default ({ data }) => {
  console.log("hi", data);
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <style jsx>{`
            .skillItem {
              background: white;
            }

            .skillItem > h1 {
                /* FUNDAMENTALS: */
                font-family: AvenirNext-Bold;
                font-size: 18px;
                color: #404040;
                letter-spacing: 0.88px;
                padding: 15px 25px 0 25px;
                line-height: 32px;
              }
  
              .skillItem > h2 {
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
          <div className="skillItem">Skill Item</div>
        </Col>
      </Row>
    </div>
  );
};

// export const query = graphql`
//   query IndexQuery {
//     nJson {
//       edges {
//         node {
//           id
//           internal {
//             contentDigest
//             type
//             owner
//           }
//         }
//       }
//     }
//   }
// `;
