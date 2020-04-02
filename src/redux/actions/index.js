import faker from "faker";
import { v4 as uuidv4 } from "uuid";

export const addRequest = ({
  createdAt = new Date().getTime(),
  title = "",
  type = "movie",
  note = ""
} = {}) => ({
  type: "NEW_REQUEST",
  request: {
    createdAt,
    title,
    type,
    id: uuidv4(),
    requestedBy: faker.name.findName(),
    note
  }
});
