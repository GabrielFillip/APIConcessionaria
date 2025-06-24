# API Concessionária 🚗

API RESTful desenvolvida em **Node.js + Express + Prisma + PostgreSQL** para o gerenciamento de concessionárias, clientes e veículos.

---

## 📌 Funcionalidades

- 📍 Cadastro, listagem, edição e remoção de **Concessionárias**
- 👤 Cadastro, listagem, edição e remoção de **Clientes**
- 🚘 Cadastro, listagem, edição e remoção de **Veículos**

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Swagger (Documentação de API)

---

## 📁 Estrutura do Projeto

APIConcessionaria/
├── prisma/
│ ├── schema.prisma
│ └── migrations/
├── src/
│ ├── routes.ts
│ ├── server.ts
│ └── swagger.json
├── .env
├── package.json
├── tsconfig.json
├── README.md


---

## 🧪 Como Executar Localmente

### 1. Clone o repositório


git clone https://github.com/seu-usuario/APIConcessionaria.git
cd APIConcessionaria

### 2. Instale as dependências

npm install

### 3. Configure o ambiente

No arquivo .env, informe a string de conexão com seu banco PostgreSQL:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/concessionaria"
Substitua usuario, senha e concessionaria pelos dados do seu banco.

### 4. Crie o banco e rode as migrations

npx prisma migrate dev --name init

### 5. Inicie a aplicação

npx ts-node-dev src/server.ts

### 6. Acesse a documentação da API
Abra no navegador:

http://localhost:3000/api-docs

## 🔄 Endpoints Principais

Concessionárias
POST /dealerships – Cadastrar concessionária

GET /dealerships – Listar todas

GET /dealerships/{id} – Buscar por ID

PUT /dealerships/{id} – Atualizar

DELETE /dealerships/{id} – Remover

Clientes
POST /customers – Cadastrar cliente

GET /customers – Listar todos

GET /customers/{id} – Buscar por ID

PUT /customers/{id} – Atualizar

DELETE /customers/{id} – Remover

Veículos
POST /vehicles – Cadastrar veículo

GET /vehicles – Listar todos

GET /vehicles/{id} – Buscar por ID

PUT /vehicles/{id} – Atualizar

DELETE /vehicles/{id} – Remover

## 📄 Observações
Os campos da documentação Swagger foram ajustados para refletir corretamente o schema do banco.

O projeto ainda não implementa abertura/fechamento de Ordens de Serviço, conforme escolha do desenvolvedor.

## 👨‍💻 Autor
Gabriel Fillip Ribeiro Ferreira

## 📬 Contato
Caso tenha dúvidas, sugestões ou queira colaborar, sinta-se à vontade para entrar em contato!