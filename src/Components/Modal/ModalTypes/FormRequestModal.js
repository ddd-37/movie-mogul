import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Form, Message } from "semantic-ui-react";
import {
  startAddRequest,
  startEditRequest,
} from "./../../../redux/actions/requests";
import { closeModal } from "../../../redux/actions/modal";
import Modal from "../Modal";

class FormRequestModal extends Component {
  state = {
    type: this.props.modalProps.type || "movie",
    title: this.props.modalProps.title || "",
    note: this.props.modalProps.note || "",
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === "") {
      this.setState({ error: "Please enter a title below!" });
    } else {
      this.setState({ error: null });
      if (this.props.modalProps.bNewRequest) {
        this.props.dispatch(startAddRequest({ ...this.state }));
      } else {
        this.props.dispatch(
          startEditRequest({
            id: this.props.modalProps.id,
            updates: { ...this.state },
          })
        );
      }

      this.props.dispatch(closeModal());
    }
  };

  handleRadio = (e, { value }) => this.setState({ type: value });

  handleTitle = (e) => this.setState({ title: e.target.value });

  handleNote = (e) => this.setState({ note: e.target.value });

  onClose = () => {
    this.props.dispatch(closeModal());
  };

  render() {
    console.log("requestForm", this.props.modalProps);
    return (
      <Modal onClose={this.onClose}>
        <Card>
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
                {this.state.error && (
                  <Message error content={this.state.error} />
                )}
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
      </Modal>
    );
  }
}

export default connect()(FormRequestModal);
