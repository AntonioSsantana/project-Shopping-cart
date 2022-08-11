const sectionItems = document.querySelector('.items');

function createProductItemElement(data) {
  const li = document.createElement('li');
  const divName = document.createElement('div');
  const img = document.createElement('img');
  const divSku = document.createElement('div');
  const divPrice = document.createElement('div');

  li.classList = 'item';
  img.src = data.image;
  img.classList = 'item_image';
  divName.innerHTML = data.name;
  divName.classList = 'item_title';
  divPrice.innerHTML = data.price;

  li.appendChild(img);
  li.appendChild(divName);
  li.appendChild(divPrice);
  sectionItems.appendChild(li);
}

const fetchProducts = (product) => {
  if (product !== 'computador') {
    throw new Error('Produto inválido.');
  }
  const $QUERY = product;
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
  fetch(ENDPOINT).then((response) => response.json()).then((data) => {
    const { results } = data;
    const productData = Object.values(results);
    productData.forEach((i) => {
      const computer = { sku: i.id, name: i.title, image: i.thumbnail, price: i.price };
      console.log(i);
      createProductItemElement(computer);
    });
  });
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
