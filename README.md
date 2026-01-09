# 📅 Sistema de Reserva de Salas (CLI)

Projeto desenvolvido em **Node.js**, executado diretamente no **terminal**, com o objetivo de praticar conceitos fundamentais da plataforma como manipulação de arquivos, organização de código e lógica de negócio.

O sistema permite o **cadastro de salas** e o **gerenciamento de reservas**, garantindo que não ocorram conflitos de horário.

---

## 🚀 Funcionalidades

- 📌 Cadastro de salas
- 📋 Listagem de salas
- 🗓️ Criação de reservas vinculadas às salas
- 🔍 Listagem de reservas
- ❌ Validação de conflitos de horário
- 💾 Persistência de dados em arquivos JSON

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **JavaScript**
- **prompt-sync** (entrada de dados via terminal)
- **File System (fs)** para persistência de dados

---

## 📁 Estrutura do Projeto

```

reserva-salas/
│
├─ index.js
│
├─ services/
│   ├─ salaService.js
│   └─ reservaService.js
│
├─ data/
│   ├─ salas.json
│   └─ reservas.json
│
└─ package.json

````

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/reserva-salas.git
````

### 2️⃣ Acessar a pasta do projeto

```bash
cd reserva-salas
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Executar o sistema

```bash
node index.js
```

ou, se preferir:

```bash
npm start
```

---

## 📌 Requisitos

* Node.js versão 18 ou superior
* Terminal (CMD, PowerShell, Git Bash, etc.)

---

## 🧠 Conceitos Praticados

* Estruturação de projetos Node.js
* Modularização de código
* Manipulação de arquivos JSON
* Lógica de validação
* Desenvolvimento de aplicações CLI
* Boas práticas de organização

---

## 🔮 Possíveis Melhorias Futuras

* Cancelar reservas por ID
* Editar salas
* Validação de datas e horários
* Autenticação de usuários
* Migração para banco de dados (MySQL / SQLite)
* Transformar o sistema em uma API com Express
* Interface web

---

## 👩‍💻 Autor(a)

Projeto desenvolvido para fins de **estudo e aprendizado em Node.js**, focado em lógica, organização e boas práticas.

---

📚 *Sinta-se à vontade para clonar, estudar e evoluir este projeto!*
