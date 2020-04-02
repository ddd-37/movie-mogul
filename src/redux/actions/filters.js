// Filter Actions

export const setDateFilter = () => ({
  type: "FILTER_BY_DATE"
});

export const setTitleFilter = (title = "") => ({
  type: "FILTER_BY_TITLE",
  title
});

export const setReqByFilter = (reqBy = "") => ({
  type: "FILTER_BY_REQBY",
  reqBy
});
