require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio')
  it('Testa se fetchProducts() é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Executa a função fetchProducts() e com argumento "computador" e teste se fetch foi chamado', () => {
    expect(fetch()).toBeCalled()
  })
});
