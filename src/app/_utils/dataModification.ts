export function modifyProductsData({
  allProducts = [],
  searchValue = "",
}: any) {
  let newData: any = {};
  allProducts.forEach((product: any) => {
    if (
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.storeName.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      if (newData[product.storeName]) {
        newData[product.storeName].push(product);
      } else {
        newData[product.storeName] = [];
        newData[product.storeName].push(product);
      }
    }
  });
  return newData;
}

export function modifyGroceryListData({ allGroceryList = [] }: any) {
  let newData: any = {};
  allGroceryList.forEach((item: any) => {
    if (newData[item.product.storeName]) {
      newData[item.product.storeName].push(item);
    } else {
      newData[item.product.storeName] = [];
      newData[item.product.storeName].push(item);
    }
  });
  return newData
}
