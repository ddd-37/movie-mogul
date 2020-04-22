import db from "./../../Firebase/Firebase";

export const addRequest = (request) => ({
  type: "ADD_REQUEST",
  request,
});

export const startAddRequest = (requestData = {}) => {
  const {
    createdAt = new Date().getTime(),
    title = "",
    type = "movie",
    uuid = "",
    userName = "",
    note = "",
  } = requestData;

  const request = { createdAt, title, type, uuid, userName, note };

  return (dispatch) => {
    return db
      .ref("requests")
      .push(request)
      .then(() => {
        dispatch(addRequest(request));
      })
      .catch((e) => {
        console.log("ERROR - startAddRequest: ", e);
      });
  };
};

export const editRequest = ({ id, updates }) => ({
  type: "EDIT_REQUEST",
  id,
  updates,
});

export const startEditRequest = ({ id, updates }) => {
  console.log("startEditRequest -> updates", updates);
  return (dispatch) => {
    return db
      .ref(`requests/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editRequest({ id, updates }));
      })
      .catch((e) => {
        console.log("ERROR - startEditRequest: ", e);
      });
  };
};

export const removeRequest = ({ id } = {}) => ({
  type: "REMOVE_REQUEST",
  id,
});

export const startRemoveRequest = ({ id } = {}) => {
  return (dispatch) => {
    return db
      .ref(`requests/${id}`)
      .remove()
      .then(() => {
        dispatch(removeRequest({ id }));
      });
  };
};

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
