import * as React from "react";
import NavHeader from "../layouts/Header";
import HeroInner from "../layouts/HeroInner";
import HeroSub from "../layouts/HeroSub";
import SkillIndex from "../layouts/SkillIndex";
import SkillSection from "../layouts/SkillSection";
import SkillItem from "../layouts/SkillItem";
import Footer from "../layouts/Footer";

import stylesheet from "antd/dist/antd.min.css";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

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
        <HeroInner />
        <HeroSub />
        <SkillIndex />
        <Footer />
      </Layout>
    );
  }
}
