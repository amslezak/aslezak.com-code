import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import NavBar from "../components/NavBar";

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Andy Slezak"
        meta={[
          { name: "Andy Slezak", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <div>
        <NavBar />
        {children()}
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
