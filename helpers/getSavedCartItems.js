const getSavedCartItems = () => {
  let cartList = '';
  cartList = document.querySelector('.cart__items');
  cartList.innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
