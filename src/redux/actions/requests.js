import { v4 as uuidv4 } from "uuid";

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
    id: uuidv4(),
    requestedBy,
    note,
  },
});

export const removeRequest = (id) => ({
  type: "REMOVE_REQUEST",
  id,
});
