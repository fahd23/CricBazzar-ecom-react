export const sortPrice = (productList, sortBy) => {
  let updatedList = [...productList];
  if (sortBy === "HIGH_TO_LOW") {
    return updatedList.sort((a, b) => b["price"] - a["price"]);
  }
  if (sortBy === "LOW_TO_HIGH") {
    return updatedList.sort((a, b) => a["price"] - b["price"]);
  }
  return updatedList;
};
