import { addRequest, removeRequest } from "../../redux/actions/requests";

test("should setup a remove request action object", () => {
  const action = removeRequest({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_REQUEST",
    id: "123abc"
  });
});
