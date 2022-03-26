export const categoryFilter = (
  productList,
  bat,
  ball,
  shoes,
  protection,
  clothings,
  accessories
) => {
  const filteredlist = [];
  if (
    bat === false &&
    ball === false &&
    shoes === false &&
    protection === false &&
    clothings === false &&
    accessories === false
  ) {
    return productList;
  }
  if (bat) {
    let newList = productList.filter(
      (item) => "bats" === item.categoryName.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (ball) {
    let newList = productList.filter(
      (item) => "balls" === item.categoryName.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (shoes) {
    let newList = productList.filter(
      (item) => "shoes" === item.categoryName.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (protection) {
    let newList = productList.filter(
      (item) => "protection" === item.categoryName.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (clothings) {
    let newList = productList.filter(
      (item) => "clothings" === item.categoryName.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  if (accessories) {
    let newList = productList.filter(
      (item) => "accessories" === item.categoryName.toLowerCase()
    );

    filteredlist.push(...newList);
  }

  return filteredlist;
};
