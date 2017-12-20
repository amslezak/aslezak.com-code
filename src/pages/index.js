import React from "react";

import NavHeader from "../layouts/Header";
import Hero from "../layouts/Hero";
import About from "../layouts/About";
import Work from "../layouts/Work";
import Quote from "../layouts/Quote";
import Portfolio from "../layouts/Portfolio";
import Footer from "../layouts/Footer";

import stylesheet from "antd/dist/antd.min.css";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style jsx>{`
          #components-layout-demo-top-side-2 .logo {
            width: 120px;
            height: 31px;
            background: #333;
            border-radius: 6px;
            margin: 16px 28px 16px 0;
            float: left;
          }
        `}</style>

        <NavHeader />
        <Hero />
        <About />
        <Work />
        <Quote />
        <Portfolio />
        <Quote />
        <Footer />
      </Layout>
    );
  }
}
