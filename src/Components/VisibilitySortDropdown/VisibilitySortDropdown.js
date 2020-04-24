import React from "react";
import { connect } from "react-redux";
import { sortItems } from "../../redux/actions/sort";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "title",
    text: "By title",
    value: "title",
  },
  {
    key: "createdAt",
    text: "By most recent",
    value: "createdAt",
  },

  {
    key: "userName",
    text: "By user name",
    value: "userName",
  },
];

const VisibilitySortDropdown = (props) => {
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
      placeholder="Sort by an option"
      selection
    />
  );
};

export default connect()(VisibilitySortDropdown);
