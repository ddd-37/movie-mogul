import React, { Component } from "react";
import { connect } from "react-redux";
import { sortItems } from "../../redux/actions/sort";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "title",
    text: "Tile",
    value: "title"
  },
  {
    key: "createdAt",
    text: "Most Recent",
    value: "createdAt"
  },

  {
    key: "requestedBy",
    text: "Requested By",
    value: "requestedBy"
  }
];

class DropdownExampleControlled extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    console.log("DropdownExampleControlled -> render -> value", value);
    console.log(this.state);
    if (value) {
      this.props.dispatch(sortItems({ sortBy: value }));
    }
    return (
      <Dropdown
        onChange={this.handleChange}
        options={options}
        placeholder="Choose an option"
        selection
        value={value}
      />
    );
  }
}

export default connect()(DropdownExampleControlled);
