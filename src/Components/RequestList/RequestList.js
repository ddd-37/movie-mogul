import React from "react";
import { connect } from "react-redux";

import { Header, Card, Grid, Responsive } from "semantic-ui-react";
import RequestItem from "./RequestItem/RequestItem";
import moment from "moment";
import VisibilitySortDropdown from "../VisibilitySortDropdown/VisibilitySortDropdown";
import NewRequestBtn from "../ActionBtns/NewRequestBtn/NewRequestBtn";

const RequestList = ({ requests }) => {
  return (
    <>
      <Grid centered style={{ padding: "2rem" }}>
        <Grid.Row>
          <Header as="h3">Pending Requests</Header>
        </Grid.Row>
        <VisibilitySortDropdown />

        <Responsive minWidth={992}>
          <NewRequestBtn />
        </Responsive>
      </Grid>

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
