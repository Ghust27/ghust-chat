![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/github/license/Ghust27/ghust-chat) ![Issues](https://img.shields.io/github/issues/Ghust27/ghust-chat)

# GHUST Chat

Uma aplicação de chat **full-stack** em tempo real, construída com Node.js, Express e MongoDB no backend, e React, Vite e Tailwind CSS no frontend. Permite cadastro e login de usuários, upload de perfil, temas personalizáveis e troca de mensagens de texto e imagem via WebSocket.

---

## Índice

- [Visão Geral](#visão-geral)  
- [Funcionalidades](#funcionalidades)  
- [Screenshot](#screenshot)  
- [Tecnologias](#tecnologias)  
- [Pré-requisitos](#pré-requisitos)  
- [Configuração](#configuração)  
- [Como Executar](#como-executar)  
  - [Em Desenvolvimento](#em-desenvolvimento)  
  - [Em Produção](#em-produção)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Contribuição](#contribuição)  
- [Licença](#licença)  

---

## Visão Geral

O **GHUST Chat** é uma plataforma de mensagens em tempo real:

- **Cadastro & Login** com validação, senha criptografada e JWT em cookie  
- **Perfil**: upload de foto via Cloudinary, edição de nome e senha  
- **Chat**: lista de usuários, histórico de mensagens, envio de texto e imagens  
- **Tempo Real**: comunicação bidirecional usando Socket.IO  
- **Temas**: escolha entre diversos temas DaisyUI (light, dark, cupcake, etc.)  
- **Notificações**: feedback via toast (react-hot-toast)  

---

## Funcionalidades

- 🔐 Autenticação segura (JWT + cookies HTTP-only)  
- 🖼️ Upload de imagens de perfil e de mensagens (Cloudinary)  
- 💬 Mensagens de texto e imagem em tempo real  
- 🎨 Temas personalizáveis com Tailwind CSS + DaisyUI  
- 📱 Interface responsiva com React e Vite  
- 🔔 Notificações de ação (login, envio de mensagem, erros)  
- 🛠️ Carregamento e estados de erro/trapping com skeletons  

---

## Tecnologias

| Camada     | Tecnologias                                                        |
| ---------- | ------------------------------------------------------------------ |
| **Backend**| Node.js · Express · MongoDB · Mongoose · JWT · Cloudinary · Socket.IO |
| **Frontend**| React · Vite · Tailwind CSS · DaisyUI · Zustand · React Router · Axios · Socket.IO Client · React Hot Toast |

---

## Pré-requisitos

- **Node.js** v14+  
- **npm** ou **yarn**  
- **MongoDB** (local ou Atlas)  
- **Conta Cloudinary** para hospedagem de imagens  

---

## Configuração

1. Clone este repositório  
 ```bash
 git clone https://github.com/Ghust27/ghust-chat.git
 cd ghust-chat
 ```


2. Crie o arquivo de variáveis de ambiente na raiz de backend (backend/.env):
  ```bash
  MONGODB_URI=seu_mongodb_uri
  JWT_SECRET=seu_jwt_secret
  CLOUDINARY_CLOUD_NAME=seu_cloud_name
  CLOUDINARY_API_KEY=seu_api_key
  CLOUDINARY_API_SECRET=seu_api_secret
  PORT=5001
```
# Como Executar Em Desenvolvimento

## Backend
```bash
cd backend
npm install
npm run dev
```
## Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

Backend: http://localhost:5001/api

## Em Produção

# No diretório raiz

```bash
npm install
npm run build   # instala deps e gera o build do frontend
npm start       # inicia o servidor Express que serve o frontend estático
```
O servidor Express servirá o build do frontend em /frontend/dist.
