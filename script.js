const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.sclassName = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // Seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

window.onload = async () => {
  const sectionItems = document.querySelector('.items');
  const data = await fetchProducts('computador');

  const { results } = data;

  results.forEach((i) => {
    const { id, title, thumbnail } = i;
    const product = createProductItemElement({ sku: id, name: title, image: thumbnail });
    sectionItems.appendChild(product);
  });

  const sectionCart = document.querySelector('.cart_items');

  const appendCartItems = async ($IDPRODUCT) => {
    const data = await fetchItem($IDPRODUCT)
    const { id, title, price } = data
    const productForCart = {
      sku: id,
      name: title,
      salePrice: price
    }
    console.log(createCartItemElement(productForCart))
  }

  appendCartItems('MLB1341706310')
};
