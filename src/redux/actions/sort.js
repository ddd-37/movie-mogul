// Sort Actions

export const sortItems = ({ sortBy = "title", order = "asc" }) => ({
  type: "SORT_ITEMS",
  config: {
    sortBy,
    order
  }
});
