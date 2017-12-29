import React from "react";
import SkillItem from "./SkillItem";

export default class SkillWrapper extends React.Component {
  render() {
    const allSections = this.props.skillItems.map(section => {
      return (
        <div style={{ margin: "50px 0 50px 0" }}>
          <h3 style={{ textTransform: "uppercase", fontWeight: 700 }}>
            {section.sectionTitle}
          </h3>
          <div
            style={{
              marginBottom: "30px",
              fontWeight: 100
            }}
          >
            <h5>{section.sectionTitle}</h5>
          </div>
          <SkillItem items={section.sectionItems} />
        </div>
      );
    });

    return <div>{allSections}</div>;
  }
}
