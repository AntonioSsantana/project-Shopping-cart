const fetchItem = ($ItemID) => {
  const ENDPOINT = `https://api.mercadolibre.com/items/${$ItemID}`;
  fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => data);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
