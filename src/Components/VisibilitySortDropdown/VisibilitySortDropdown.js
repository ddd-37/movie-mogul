import React from "./node_modules/react";
import { connect } from "./node_modules/react-redux";
import { sortItems } from "../../redux/actions/sort";
import { Dropdown } from "./node_modules/semantic-ui-react";

const options = [
  {
    key: "title",
    text: "Tile",
    value: "title",
  },
  {
    key: "createdAt",
    text: "Most Recent",
    value: "createdAt",
  },

  {
    key: "requestedBy",
    text: "Requested By",
    value: "requestedBy",
  },
];

const DropdownExampleControlled = (props) => {
  const handleChange = (e, { value }) => {
    let order = "asc";
    if (value === "createdAt") {
      order = "desc";
    }
    props.dispatch(sortItems({ sortBy: value, order }));
  };

  return (
    <Dropdown
      onChange={handleChange}
      options={options}
      placeholder="Choose an option"
      selection
    />
  );
};

export default connect()(DropdownExampleControlled);
