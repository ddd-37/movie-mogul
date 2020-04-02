import React from "react";

const RequestItem = ({ title, reqBy, note }) => {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Requested By: {reqBy}</p>
      <p>Note: {note}</p>
    </div>
  );
};

export default RequestItem;
