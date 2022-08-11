require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })

  it('Teste a função fetchItem("MLB1615760527") e teste se fetch foi chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  })

  it('Teste a função fetchItem("MLB1615760527") e teste se fetch foi chamado com a url esperada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })

  it('Teste se o retorno da função fetchItem("MLB1615760527") tem a estruturada de dados igual ao objeto "item.js" já implementado', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })
});
