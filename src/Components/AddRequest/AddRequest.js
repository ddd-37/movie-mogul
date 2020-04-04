import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Form, Message } from "semantic-ui-react";
import { addRequest } from "./../../redux/actions/requests";

class AddRequest extends Component {
  state = {
    type: "movie",
    title: "",
    note: "",
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.title) {
      this.setState({ error: "Please enter a title below!" });
    } else {
      this.setState({ error: null });
    }

    this.props.dispatch(addRequest({ ...this.state }));
  };

  handleRadio = (e, { value }) => this.setState({ type: value });

  handleTitle = e => this.setState({ title: e.target.value });

  handleNote = e => this.setState({ note: e.target.value });

  render() {
    return (
      <Card centered>
        <Card.Content>
          <h3>New Request</h3>
          <Form onSubmit={this.handleSubmit} error>
            <Form.Field>
              <Form.Radio
                label="TV Show"
                value="tv"
                checked={this.state.type === "tv"}
                onChange={this.handleRadio}
              />
              <Form.Radio
                label="Movie"
                value="movie"
                checked={this.state.type === "movie"}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Field>
              {this.state.error && <Message error content={this.state.error} />}
              <label>Title</label>
              <input
                value={this.state.title}
                placeholder="Please be as specific as you can"
                onChange={this.handleTitle}
              />
            </Form.Field>
            <Form.Field>
              <label>Note:</label>
              <input
                placeholder="Special Note"
                value={this.state.note}
                onChange={this.handleNote}
              />
            </Form.Field>
            <Form.Button type="submit" fluid inverted color="green">
              Submit
            </Form.Button>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default connect()(AddRequest);
