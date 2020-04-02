import React from "react";
import { Card, Button } from "semantic-ui-react";

const RequestItem = ({ title, reqBy, note, createdAt }) => {
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
        <Button inverted color="red" floated="right">
          Remove
        </Button>
      </Card.Content>
    </Card>
  );
};

export default RequestItem;
