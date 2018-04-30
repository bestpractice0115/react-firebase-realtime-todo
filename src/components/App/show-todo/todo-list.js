import React from "react";
import _ from "lodash";

export default props => {
  return (
    <ul>
      {_.map(props.todos, (item, i) => <li key={i}>{item.name}</li>)}
    </ul>
  );
};
