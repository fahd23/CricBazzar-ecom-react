export const FilterRating = (productList, sortRating) => {
  let updatedList = [...productList];
  if (sortRating) {
    return updatedList.filter(
      (products) => Number(products.rating) >= Number(sortRating)
    );
  }
  return updatedList;
};
