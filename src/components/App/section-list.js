import React from "react";
import _ from "lodash";

export default props => {
  return (
    <ul>
      {_.map(props.sections, section => (
        <li key={section.id}>{section.name}</li>
      ))}
    </ul>
  );
};
