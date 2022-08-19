const saveCartItems = (id) => {
  const cartItem = (id);
  const cartItemSave = cartItem.innerHTML;
  localStorage.setItem('cartItems', cartItemSave);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
