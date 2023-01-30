# Testes _end-to-end_ com Cypress

Um exemplo para demonstrar testes end to end escritos com Cypress e integração contínua com GitHub Actions.

## Pré-requisitos

Para executar este projeto é necessário:

- [git](https://git-scm.com/downloads)
- [nodejs](https://nodejs.org/en/)
- NPM
- [Google Chrome](https://www.google.com/intl/en_us/chrome/)

**Note:** Ao instalar o nodejs, o NPM será instalado junto.

## Instalação

Para instalar as dependencias de dev, execute `npm install`.

## Configurando variáveis de ambiente

Antes de rodar os testes, algumas variáveis de ambiente precisarão ser setadas.

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json`, e sete os valores apropriados para todas as variáveis.

**Note:** `cypress.env.json` é um arquivo que será ignorado pelo git.

**Note:** Usando a versão trial do [Mailosaur](https://mailosaur.com/).

## Executando os testes

Neste projeto você pode rodar testes de maneira interativa ou headless. E também poderá rodar as resoluções de tela para desktop e tablet

### Modo Headless

Execute `npm test` para executar todos os testes em modo headless utilizando uma resolução de desktop.

Execute `npm run test:tablet` para executar o teste em modo headless utilizando uma resolução de tablet.

### Modo Interativo

Execute `npm run cy:open` para abrir o Cypress Test Runner e executar os testes em um modo interativo utilizando a resolução desktop.

Execute `npm run cy:open:tablet` para abrir o Cypress Test Runner e executar os testes em um modo interativo utilizando a resolução tablet.

___

Made with ❤️ by [Line Sineiro](https://github.com/allinesineiro). [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
