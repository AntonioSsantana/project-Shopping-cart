const fetchProducts = (product) => {
  if (product !== 'computador') {
    throw new Error('Produto inválido.')
  }

  const $QUERY = product;
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`

};

console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
