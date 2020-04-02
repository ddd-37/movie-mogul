import React from "react";
import { connect } from "react-redux";
import RequestItem from "./RequestItem/RequestItem";
import moment from "moment";

const RequestList = props => {
  console.log("props", props);
  return (
    <>
      <h1>Requests</h1>
      <div className="ui stackable four column grid cards">
        {props.requests.map(item => {
          return (
            <RequestItem
              createdAt={moment(item.createdAt).fromNow()}
              key={item.id}
              title={item.title}
              reqBy={item.requestedBy}
              note={item.note}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    requests: state.requests
  };
};

export default connect(mapStateToProps)(RequestList);
