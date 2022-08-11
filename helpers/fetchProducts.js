const fetchProducts = ($QUERY) => {
  if ($QUERY !== 'computador') {
    throw new Error('Invalid Product');
  }
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
  return fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => data);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
