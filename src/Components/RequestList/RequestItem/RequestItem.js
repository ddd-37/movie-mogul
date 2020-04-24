import React from "react";
import { connect } from "react-redux";
import { openModal } from "./../../../redux/actions/modal";
import { Card, Button, Message } from "semantic-ui-react";

const RequestItem = ({
  id,
  title,
  type,
  userName,
  note,
  createdAt,
  openModal,
  user,
}) => {
  const handleEditClick = ({ id, title, type, userName, note, createdAt }) => {
    openModal({
      modalType: "requestForm",
      modalProps: { id, title, type, userName, note, createdAt },
    });
  };

  const handleDeleteClick = (id) => {
    openModal({ modalType: "deleteRequest", modalProps: { id } });
  };

  return (
    <Card raised>
      <Card.Content>
        <Card.Header as="h2">{title}</Card.Header>
        <Card.Meta>
          Requested by {userName} <br />
          {createdAt}
        </Card.Meta>
        <Card.Description>
          Note:
          <br /> {note}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {user.displayName === userName || user.isAdmin ? (
          <>
            <Button
              inverted
              color="blue"
              floated="left"
              onClick={() =>
                handleEditClick({ id, title, type, userName, note, createdAt })
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
          </>
        ) : (
          <p style={{ color: "violet" }}>Only editable by author</p>
        )}
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = {
  openModal,
};

const mapStateToProps = (state) => ({
  requests: state.requests,
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestItem);
