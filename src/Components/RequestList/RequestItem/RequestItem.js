import React from "react";
import { connect } from "react-redux";
import { removeRequest } from "./../../../redux/actions/requests";
import { Card, Button } from "semantic-ui-react";

const RequestItem = ({ id, title, reqBy, note, createdAt, dispatch }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          Requested by {reqBy} <br />
          {createdAt}
        </Card.Meta>
        <Card.Description>
          Note:
          <br /> {note}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          inverted
          color="red"
          floated="right"
          onClick={() => dispatch(removeRequest(id))}
        >
          Remove
        </Button>
      </Card.Content>
    </Card>
  );
};

export default connect()(RequestItem);
