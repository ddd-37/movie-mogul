import React from "react";
import { connect } from "react-redux";

import { Card } from "semantic-ui-react";
import RequestItem from "./RequestItem/RequestItem";
import moment from "moment";

const RequestList = ({ requests, type }) => {
  return (
    <>
      <Card.Group>
        {requests.map((item) => {
          console.log(item.type);
          if (item.type === type) {
            return (
              <RequestItem
                createdAt={moment(item.createdAt).fromNow()}
                key={item.id}
                id={item.id}
                title={item.title}
                type={item.type}
                userName={item.userName}
                note={item.note}
              />
            );
          }
        })}
      </Card.Group>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps -> state", state);
  return {
    requests: state.requests,
  };
};

export default connect(mapStateToProps)(RequestList);
