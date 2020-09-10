export const likeplaceToAdd = (allCart, addCart) => {
  const existCart = allCart.find((cart) => cart.id === addCart.id);
  if (existCart) {
    return existCart;
  }
};
