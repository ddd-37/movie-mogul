import React from "react";
import { Dropdown } from "semantic-ui-react";

const filterOptions = [
  {
    key: "FILTER_BY_DATE",
    text: "Most Recent",
    value: "Most Recent"
  },
  {
    key: "FILTER_BY_TITLE",
    text: "Tile",
    value: "Tile"
  },
  {
    key: "FILTER_BY_REQUESTEDBY",
    text: "Requested By",
    value: "Requested By"
  }
];

const VisibilityFilterDropdown = () => (
  <div>
    <Dropdown
      placeholder="Filter requests by..."
      selection
      options={filterOptions}
    />
  </div>
);

export default VisibilityFilterDropdown;
