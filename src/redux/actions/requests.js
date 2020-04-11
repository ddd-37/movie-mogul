import db from "./../../Firestore/Firestore";

export const addRequest = ({
  createdAt = new Date().getTime(),
  title = "",
  type = "movie",
  requestedBy = "",
  note = "",
} = {}) => ({
  type: "NEW_REQUEST",
  request: {
    createdAt,
    title,
    type,
    requestedBy,
    note,
  },
});

export const editRequest = ({ id, updates }) => ({
  type: "EDIT_REQUEST",
  id,
  updates,
});

export const removeRequest = (id) => ({
  type: "REMOVE_REQUEST",
  id,
});

export const getRequests = (requests) => ({
  type: "GET_REQUESTS",
  requests,
});

export const startGetRequests = () => {
  return (dispatch) => {
    const requests = [];
    return db
      .ref("requests")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((child) => {
          requests.push({
            id: child.key,
            ...child.val(),
          });
        });
        dispatch(getRequests(requests));
      });
  };
};
