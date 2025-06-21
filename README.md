# PoupiApp

Sistema de gestão financeira pessoal para ajudar usuários a controlar seus gastos e poupar dinheiro.

## Funcionalidades

- Exibição de Dicas de Economia por Categoria
- Busca por Dicas

## Tecnologias Utilizadas

- Backend: .NET
- Frontend: React Native
- Banco de Dados: SQL Server

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/juliaromenia/PoupiApp
```

2. Instale as dependências
```bash
cd poupiapp
npm install
```

3. Inicie o servidor
```bash
npm start
```

## Estrutura do Projeto

- `/src/app` - Telas e componentes do aplicativo React Native, incluindo autenticação, dicas de economia (Energia, Água, Finanças) e navegação.
  - Telas principais: `index.tsx` (boas-vindas), `login.tsx`, `cadastro.tsx`, `inicial.tsx`
  - Telas de categorias: `energia.tsx`, `agua.tsx`, `financas.tsx`
  - Subpastas de páginas detalhadas: 
    - `/energia-paginas` (dicas detalhadas de energia)
    - `/agua-paginas` (dicas detalhadas de água)
    - `/financas-paginas` (dicas detalhadas de finanças)
  - Componentes compartilhados: `bottomMenu.tsx`
  - Estilos: `/styles`
- `/src/config` - Configurações globais do frontend, como URL da API.
- `/assets/images` - Imagens e ícones utilizados na interface do app.
- `/.expo` - Arquivos de configuração e cache do Expo.
