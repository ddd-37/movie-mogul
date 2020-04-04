import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import RequestItem from "./RequestItem/RequestItem";
import moment from "moment";
import VisibilityFilterDropdown from "../VisibilityFitlerDropDown/VisibilityFitlerDropDown";

const RequestList = props => {
  return (
    <>
      <div className="ui grid centered" style={{ marginBottom: "1rem" }}>
        <div>
          <h1>Pending Requests</h1>
        </div>
        <div>
          <VisibilityFilterDropdown />
        </div>
      </div>

      <Card.Group centered>
        {props.requests.map(item => {
          return (
            <RequestItem
              createdAt={moment(item.createdAt).fromNow()}
              key={item.id}
              id={item.id}
              title={item.title}
              reqBy={item.requestedBy}
              note={item.note}
            />
          );
        })}
      </Card.Group>
    </>
  );
};

const mapStateToProps = state => {
  return {
    requests: state.requests
  };
};

export default connect(mapStateToProps)(RequestList);
