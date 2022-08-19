const getSavedCartItems = () => {
  let listaCarrinho = '';
  listaCarrinho = document.querySelector('.cart__items');
  listaCarrinho.innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
