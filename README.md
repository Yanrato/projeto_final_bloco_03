# 💊 Farmácia Vida Leve

Aplicação web desenvolvida em **React + TypeScript** para a gestão e apresentação de produtos de uma farmácia fictícia.

O projeto foi desenvolvido como parte do **Projeto Final do Bloco 03**, aplicando conceitos de desenvolvimento Front-end, componentização, consumo de API, autenticação, roteamento e estilização responsiva.

> 📚 Projeto desenvolvido para fins educacionais.

---

## 📋 Sobre o projeto

A **Farmácia Vida Leve** é uma aplicação web que tem como objetivo oferecer uma interface para gerenciamento e visualização de produtos e categorias de uma farmácia.

A aplicação foi construída utilizando uma arquitetura baseada em componentes React, buscando manter o código organizado, reutilizável e de fácil manutenção.

Entre os principais recursos desenvolvidos estão:

* 🏠 Página inicial;
* 🧭 Sistema de navegação;
* 📦 Listagem e gerenciamento de produtos;
* 🏷️ Gerenciamento de categorias;
* 🔐 Sistema de autenticação;
* 👤 Cadastro e login de usuários;
* ✏️ Criação, edição e exclusão de registros;
* 🔎 Navegação entre diferentes páginas;
* 📱 Interface responsiva;
* 🔔 Feedback visual através de mensagens e alertas;
* 🌐 Comunicação com API utilizando Axios.

---

## 🚀 Tecnologias utilizadas

### Front-end

* ⚛️ **React 19**
* 📘 **TypeScript 6**
* ⚡ **Vite 8**
* 🎨 **Tailwind CSS 4**
* 🧭 **React Router DOM 7**
* 🎯 **Phosphor Icons**
* 🌐 **Axios**
* ⏳ **React Spinners**

### Ferramentas

* **Git**
* **GitHub**
* **ESLint**
* **npm**

As dependências e versões utilizadas estão disponíveis no `package.json` do projeto.

---

## 🖥️ Funcionalidades

### 🏠 Home

Página inicial da aplicação responsável por apresentar a Farmácia Vida Leve e direcionar o usuário para as principais funcionalidades do sistema.

---

### 🧭 Navbar

Barra de navegação responsável pelo acesso às principais áreas da aplicação.

A navegação é realizada utilizando **React Router**, permitindo a troca de páginas sem a necessidade de recarregar toda a aplicação.

---

### 📦 Produtos

Área destinada ao gerenciamento dos produtos cadastrados na farmácia.

Entre as operações disponíveis estão:

* Visualização dos produtos;
* Cadastro de novos produtos;
* Edição de produtos;
* Exclusão de produtos;
* Associação de produtos às categorias;
* Visualização das informações dos produtos.

---

### 🏷️ Categorias

Sistema responsável pelo gerenciamento das categorias utilizadas para organizar os produtos.

É possível realizar operações de:

* Listagem;
* Cadastro;
* Edição;
* Exclusão.

---

### 🔐 Autenticação

A aplicação possui um fluxo de autenticação para controlar o acesso às funcionalidades do sistema.

Inclui:

* Cadastro de usuário;
* Login;
* Logout;
* Controle de usuário autenticado;
* Proteção de funcionalidades que exigem autenticação.

---

### 🔔 Feedback visual

A aplicação utiliza componentes visuais para informar o usuário sobre o resultado das operações realizadas, proporcionando uma experiência mais clara durante a utilização do sistema.

---

## 📁 Estrutura do projeto

O projeto utiliza uma organização baseada em **componentes, páginas, contextos, modelos, serviços e utilitários**.

```text
projeto_final_bloco_03/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── footer/
│   │   ├── navbar/
│   │   ├── produto/
│   │   └── ...
│   │
│   ├── contexts/
│   │
│   ├── models/
│   │
│   ├── pages/
│   │   ├── home/
│   │   ├── login/
│   │   ├── cadastro/
│   │   └── ...
│   │
│   ├── services/
│   │
│   ├── utils/
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

A estrutura utiliza a separação de responsabilidades para facilitar a manutenção e evolução da aplicação.

---

## 🔄 Comunicação com a API

A comunicação entre o Front-end e o Back-end é realizada utilizando **Axios**.

As requisições são organizadas na camada de serviços, permitindo separar a lógica de comunicação com a API dos componentes responsáveis pela interface.

---

## 🎨 Interface

A interface foi desenvolvida utilizando **Tailwind CSS**, permitindo a criação de layouts responsivos através de classes utilitárias.

O projeto busca oferecer uma experiência consistente em diferentes tamanhos de tela, incluindo computadores, tablets e dispositivos móveis.

---

## 💻 Como executar o projeto

### Pré-requisitos

Antes de iniciar, certifique-se de possuir instalado:

* [Node.js](https://nodejs.org/)
* npm
* Git

### 1. Clone o repositório

```bash
git clone https://github.com/Yanrato/projeto_final_bloco_03.git
```

### 2. Acesse a pasta

```bash
cd projeto_final_bloco_03
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento e disponibilizará o endereço local no terminal.

---

## 🛠️ Scripts disponíveis

| Comando           | Função                                      |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento        |
| `npm run build`   | Compila o projeto para produção             |
| `npm run lint`    | Executa a análise do ESLint                 |
| `npm run preview` | Executa uma prévia da aplicação de produção |

Esses comandos estão configurados no `package.json`.

---

## 📱 Responsividade

A aplicação foi desenvolvida pensando em diferentes tamanhos de tela.

O uso do **Tailwind CSS** facilita a aplicação de estilos responsivos e permite adaptar os componentes para:

* 💻 Desktop;
* 💻 Notebook;
* 📱 Smartphones;
* 📲 Tablets.

---

## 🎯 Objetivos de aprendizagem

O desenvolvimento do projeto teve como objetivo colocar em prática conceitos importantes do desenvolvimento Front-end, como:

* Componentização com React;
* Tipagem utilizando TypeScript;
* Criação de interfaces responsivas;
* Roteamento com React Router;
* Consumo de APIs REST;
* Requisições HTTP com Axios;
* Gerenciamento de estado;
* Context API;
* Autenticação;
* Organização de projetos React;
* Reutilização de componentes;
* Boas práticas de desenvolvimento;
* Controle de versão com Git e GitHub.

---

## 🔮 Próximas melhorias

Algumas funcionalidades podem ser aprimoradas futuramente, como:

* Melhorias de acessibilidade;
* Aprimoramento da experiência em dispositivos móveis;
* Implementação de filtros avançados;
* Melhorias na busca de produtos;
* Paginação;
* Melhor tratamento de erros;
* Testes automatizados;
* Melhorias de performance;
* Deploy da aplicação.

---

## 👨‍💻 Desenvolvedor

**Yan Ferreira**

🔗 GitHub: https://github.com/Yanrato

---

## 📚 Projeto acadêmico

**Farmácia Vida Leve — Projeto Final Bloco 03**

Projeto desenvolvido para aplicação prática dos conhecimentos adquiridos durante a formação em desenvolvimento de software.
