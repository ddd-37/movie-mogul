import React from "react";
import { connect } from "react-redux";
import { openModal } from "./../../redux/actions/modal";
import { Card, Button } from "semantic-ui-react";
import RequestItem from "./RequestItem/RequestItem";
import moment from "moment";
import VisibilitySortDropdown from "../VisibilitySortDropdown/VisibilitySortDropdown";

const RequestList = ({ requests, dispatch }) => {
  const handleOpenNewReqeust = () => {
    console.log(
      "handleOpenNewReqeust -> handleOpenNewReqeust",
      handleOpenNewReqeust
    );
    dispatch(
      openModal({ modalType: "requestForm", modalProps: { bNewRequest: true } })
    );
  };
  return (
    <>
      <div className="ui grid centered" style={{ marginBottom: "1rem" }}>
        <div>
          <h1>Pending Requests</h1>
        </div>
        <div>
          <VisibilitySortDropdown />
        </div>
        <Button
          inverted
          color="blue"
          floated="right"
          onClick={handleOpenNewReqeust}
        >
          New Request
        </Button>
      </div>

      <Card.Group centered>
        {requests.map((item) => {
          return (
            <RequestItem
              createdAt={moment(item.createdAt).fromNow()}
              key={item.id}
              id={item.id}
              title={item.title}
              type={item.type}
              reqBy={item.requestedBy}
              note={item.note}
            />
          );
        })}
      </Card.Group>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    requests: state.requests,
  };
};

export default connect(mapStateToProps)(RequestList);
