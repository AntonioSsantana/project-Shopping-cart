require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio')
  it('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Executa a função fetchProducts() e com argumento "computador" e teste se fetch foi chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  })

  it('Teste se, ao chamar a função fetchProducts com o argumento "computador" fetch utilize a url correta', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
});
