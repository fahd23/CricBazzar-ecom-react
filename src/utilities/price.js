export const FilterPrice = (productList, price) => {
  let updatedList = [...productList];
  if (price) {
    return updatedList.filter(
      (products) => Number(products.price) <= Number(price)
    );
  }
  return updatedList;
};
