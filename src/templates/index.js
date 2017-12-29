import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Andy Slezak"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <div>
        <NavBar />
        HI FROM TEMPLATE
        {children()}
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
