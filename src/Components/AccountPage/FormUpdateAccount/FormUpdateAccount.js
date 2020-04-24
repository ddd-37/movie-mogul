import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Input, Message } from "semantic-ui-react";
import { startUpdateUserProile } from "./../../../redux/actions/user";

// ToDo - if the user changes their name twice, the component doens't rerender

class FormUpdateAccount extends Component {
  state = {
    displayName: this.props.user.displayName,
    error: null,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    console.log(this.state.displayName);
    if (this.state.displayName === "") {
      this.setState({
        error: "Please do not leave the display name field blank!",
      });
      return;
    }
    console.log(this.state);
    this.props.dispatch(startUpdateUserProile(this.state.displayName));
  };

  render() {
    return (
      <Form inverted size={"large"} onSubmit={this.handleSubmit} error>
        <Form.Field inline>
          <label>
            The way your name looks to people: {this.props.user.displayName}
          </label>
        </Form.Field>
        {this.state.error && <Message error content={this.state.error} />}
        <Form.Field inline>
          <label>Change your Display Name</label>

          <Input
            placeholder="New Display Name"
            name="displayName"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Button type="submit" inverted color="green">
          Submit
        </Form.Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(FormUpdateAccount);
