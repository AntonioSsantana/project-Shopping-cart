const saveCartItems = (id) => {
  const acresentaCart = (id);
  const salvaAcresentaCart = acresentaCart.innerHTML;
  console.log(salvaAcresentaCart);
  localStorage.setItem('cartItems', salvaAcresentaCart);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
