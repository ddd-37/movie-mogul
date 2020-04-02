import React from "react";

const RequestItem = ({ title, reqBy, note, createdAt }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          Requested by {reqBy} <br />
          {createdAt}
        </div>
        <div className="description">
          Note:
          <br /> {note}
        </div>
      </div>
      <div className="extra content">
        <div className="ui right floated inverted red button ">Remove</div>
      </div>
    </div>
  );
};

export default RequestItem;
