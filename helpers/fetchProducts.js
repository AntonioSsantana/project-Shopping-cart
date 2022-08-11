const fetchProducts = (search) => {
  if (search !== 'computador') {
    throw new Error('Produto inválido.');
  }
  const $QUERY = search;
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
  fetch(ENDPOINT).then((response) => response.json()).then((data) => {
    const { results } = data;
    const productData = Object.values(results);
    productData.forEach((i) => {
      const product = { sku: i.id, name: i.title, image: i.thumbnail, price: i.price };
      createProductItemElement(product);
    });
  });
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
