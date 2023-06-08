# Projeto Shopping Cart

O Shopping Cart é um projeto desenvolvido em JavaScript que permite gerar produtos e adicionar ao carrinho de compras.

## Funcionalidades

- Geração automática de produtos.
- Adição de produtos ao carrinho de compras.

## Utilização do Live Server do VSCode

O projeto utiliza a extensão Live Server do VSCode para executar a aplicação localmente.

Para iniciar o servidor local, siga as etapas abaixo:

1. Instale a extensão Live Server por meio da loja de extensões do VSCode.
2. O servidor será iniciado e o projeto será aberto em seu navegador padrão.

## Dependências

O projeto utiliza as seguintes dependências:

- `cypress`: Framework de testes de integração.
- `cypress-multi-reporters`: Plugin para relatórios personalizados no Cypress.
- `eslint-config-trybe-fundamentals`: Configuração de linting específica da Trybe para projetos fundamentos.
- `jest`: Framework de testes unitários.
- `mocha`: Framework de testes de integração.
- `mochawesome`: Gerador de relatórios estilizados para testes com Mocha.
- `mochawesome-merge`: Ferramenta para mesclar relatórios de teste do Mochawesome.
- `mochawesome-report-generator`: Gerador de relatórios HTML a partir de resultados de testes Mochawesome.
- `stylelint`: Ferramenta de linting para estilos CSS.
- `stylelint-config-standard`: Configuração padrão para o stylelint.

```json
"dependencies": {
    "cypress": "4.3.0",
    "cypress-multi-reporters": "1.2.4",
    "eslint-config-trybe-fundamentals": "1.1.0",
    "jest": "24.9.0",
    "mocha": "7.1.1",
    "mochawesome": "5.0.0",
    "mochawesome-merge": "4.0.3",
    "mochawesome-report-generator": "4.1.0",
    "stylelint": "13.8.0",
    "stylelint-config-standard": "20.0.0"
  }
```

## Scripts

O projeto possui os seguintes scripts:

- `test`: Executa os testes unitários utilizando o Jest.
- `test:coverage`: Executa os testes unitários e gera um relatório de cobertura de código.
- `cypress`: Executa os testes de integração utilizando o Cypress.
- `cypress:open`: Abre o Cypress Test Runner para executar os testes interativamente.
- `lint`: Executa a verificação de linting nos arquivos JavaScript utilizando o ESLint.
- `lint:styles`: Executa a verificação de linting nos arquivos CSS utilizando o Stylelint.
- `serialize`: Executa um script para gerar um relatório de cobertura de teste em formato JSON.

```json
"scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage",
    "cypress": "cypress run",
    "cypress:open": "cypress open",
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json . --ext .js",
    "lint:styles": "stylelint *.css --config .stylelintrc.json --ignore-disables --allow-empty-input",
    "serialize": "node -e 'require(\"./cypress/utils/testCoverage.js\").testCoverage()'"
  }
```

## Configuração do ESLint

O projeto utiliza a configuração "trybe-fundamentals" do ESLint, que é uma configuração específica da Trybe para projetos do módulo de fundamentos.

## Configuração do Cypress

O projeto está configurado para executar testes de integração utilizando o framework Cypress. Você pode executar os testes através do comando `npm run cypress` ou abrir o Cypress Test Runner com o comando `npm run cypress:open`.

## Configuração do Mocha e Mochawesome

O projeto utiliza o framework Mocha para executar testes de integração e o Mochawesome para gerar relatórios estilizados. Os relatórios são gerados após a execução dos testes e podem ser encontrados na pasta `mochawesome-report`.

## Configuração do Stylelint

O projeto utiliza o Stylelint para a verificação de linting nos arquivos CSS. A configuração padrão utilizada é a "standard".