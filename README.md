# 💰 PoupiApp

Aplicativo de **gestão financeira pessoal** para ajudar usuários a controlar seus gastos e alcançar seus objetivos de economia. Simples, prático e na palma da mão! 📱

---

## 🚀 Funcionalidades

- 💡 Exibição de **Dicas de Economia** por categoria
- 🔎 **Busca por Dicas** de forma rápida e intuitiva

---

## 🧰 Tecnologias Utilizadas

- 🖥️ **Backend**: [.NET](https://github.com/juliaromenia/PoupiAPI)  
- 📱 **Frontend**: React Native  
- 🗄️ **Banco de Dados**: SQL Server  

---

## 🔗 Repositórios

- ✅ **Frontend (Este projeto)**: [PoupiApp](https://github.com/juliaromenia/PoupiApp)
- 🔧 **Backend (API)**: [PoupiAPI](https://github.com/juliaromenia/PoupiAPI)

---

## ⚙️ Instalação

1. Clone o repositório
bash
git clone https://github.com/juliaromenia/PoupiApp


2. Instale as dependências
bash
cd poupiapp
npm install


3. Inicie o servidor
bash
npm start

## 🗂️ Estrutura do Projeto

- /src/app - Telas e componentes do aplicativo React Native, incluindo autenticação, dicas de economia (Energia, Água, Finanças) e navegação.
  - Telas principais: index.tsx (boas-vindas), login.tsx, cadastro.tsx, inicial.tsx
  - Telas de categorias: energia.tsx, agua.tsx, financas.tsx
  - Subpastas de páginas detalhadas: 
    - /energia-paginas (dicas detalhadas de energia)
    - /agua-paginas (dicas detalhadas de água)
    - /financas-paginas (dicas detalhadas de finanças)
  - Componentes compartilhados: bottomMenu.tsx
  - Estilos: /styles
- /src/config - Configurações globais do frontend, como URL da API.
- /assets/images - Imagens e ícones utilizados na interface do app.
- /.expo - Arquivos de configuração e cache do Expo.
