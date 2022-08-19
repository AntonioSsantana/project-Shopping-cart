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

const cartItemClickListener = (event) => event.target.remove();

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const clearCart = () => {
  const cartListItem = document.querySelectorAll('.cart__item'); 
  const clear = document.querySelector('.empty-cart'); 
  clear.addEventListener('click', () => {
    cartListItem.forEach((item) => item.remove());
  });
};

window.onload = async () => {
  const sectionCart = document.querySelector('.cart__items');
  const sectionItems = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const { results } = data;

  results.forEach((i) => {
    const { id, title, thumbnail, price } = i;
    const product = createProductItemElement({ sku: id, name: title, image: thumbnail });
    sectionItems.appendChild(product);

    const buttonAddToCart = product.getElementsByClassName('item__add')[0];
    buttonAddToCart.addEventListener('click', () => {
      const carShopping = createCartItemElement({ sku: id, name: title, salePrice: price });
      sectionCart.appendChild(carShopping);
      saveCartItems(sectionCart);
      clearCart();
    });
  });
};
