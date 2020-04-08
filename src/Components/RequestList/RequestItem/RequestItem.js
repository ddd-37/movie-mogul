import React from "react";
import { connect } from "react-redux";
import { openModal } from "./../../../redux/actions/modal";
import { Card, Button } from "semantic-ui-react";

const RequestItem = ({ id, title, type, reqBy, note, createdAt, dispatch }) => {
  const handleEditClick = ({ id, title, type, reqBy, note, createdAt }) => {
    dispatch(
      openModal({
        modalType: "requestForm",
        modalProps: { id, title, type, reqBy, note, createdAt },
      })
    );
  };
  const handleDeleteClick = (id) => {
    dispatch(openModal({ modalType: "deleteRequest", modalProps: { id } }));
  };

  return (
    <Card>
      <Card.Content>
        <Card.Meta>{type === "movie" ? "Movie" : "TV Show"}</Card.Meta>
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
          color="blue"
          floated="left"
          onClick={() =>
            handleEditClick({ id, title, type, reqBy, note, createdAt })
          }
        >
          Edit
        </Button>
        <Button
          inverted
          color="red"
          floated="right"
          onClick={() => handleDeleteClick(id)}
        >
          Remove
        </Button>
      </Card.Content>
    </Card>
  );
};

export default connect()(RequestItem);
