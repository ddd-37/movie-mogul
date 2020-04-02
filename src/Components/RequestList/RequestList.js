import React from "react";
import { connect } from "react-redux";
import RequestItem from "./RequestItem/RequestItem";

const RequestList = props => {
  console.log("props", props);
  return (
    <div>
      <h1>Requestss</h1>
      {props.requests.map(item => {
        return (
          <RequestItem
            key={item.id}
            title={item.title}
            reqBy={item.requestedBy}
            note={item.note}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    requests: state.requests
  };
};

export default connect(mapStateToProps)(RequestList);
