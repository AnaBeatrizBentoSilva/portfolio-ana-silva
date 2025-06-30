# Portfólio - Ana Beatriz Bento Silva

Este é meu portfólio pessoal, desenvolvido com React, Next.js, TypeScript e Tailwind CSS.  
Apresenta minha trajetória profissional, projetos, experiências e formas de contato.

---

## 🚀 Tecnologias utilizadas

- React + Next.js
- TypeScript
- Tailwind CSS
- json-server (API fake)

---

## 📁 Estrutura

```
.
├── api/               # API fake com json-server
│   └── db.json
├── app/
│   ├── contato/
│   │   └── page.tsx
│   ├── experiencias/
│   │   └── page.tsx
│   ├── projetos/
│   │   └── page.tsx
│   ├── sobre-mim/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── file/
│   │   └── Currículo - Ana Silva.pdf
│   ├── icon/
│   │   ├── css3.png
│   │   ├── excel.png
│   │   ├── mongodb.svg
│   │   ├── react.png
│   │   ├── scss.png
│   │   ├── tailwindcss.png
│   │   └── typescript.png
│   └── img/
│       ├── experiences/
│       │   ├── comovai.png
│       │   ├── minilabs.png
│       │   └── offy.png
│       ├── projects/
│       │   ├── nubankclassico.png
│       │   ├── nubankmoderno.png
│       │   ├── spotifyhtml.png
│       │   ├── spotifyreact.png
│       │   └── sudoku.png
│       ├── test/
│       │   └── example.png
│       ├── ana.jpeg
│       └── fundo.svg
├── src/
│   └── components/
│       ├── Card/
│       │   ├── ExperiencesCard.tsx
│       │   ├── InfoCard.tsx
│       │   ├── ProjectCard.tsx
│       │   └── QualificationsCard.tsx
│       └── Header/
│           └── Header.tsx
├── .gitignore.js
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── yarn.lock
```

---

## 🧑‍💻 Como rodar o projeto localmente

### Pré-requisitos:

- Node.js instalado
- npm ou yarn

### 1. Clone o repositório

```bash
git clone https://github.com/AnaBeatrizBentoSilva/portfolio-ana-silva.git
cd portfolio-ana
```

### 2. Instale as dependências

```bash
npm install
ou
yarn install
```

### 3. Inicie a API fake

```bash
npx json-server --watch api/db.json --port 3005
```

> Isso irá rodar a API em: http://localhost:3005

### 4. Inicie a aplicação Next.js

```bash
npm run dev
```

> Acesse o site em: http://localhost:3000

---

## 🧾 Funcionalidades

- Página inicial com apresentação
- Seções de "Sobre Mim", "Experiências", "Projetos" e "Contato"
- Dados carregados via API fake (json-server)
- Design responsivo e moderno

---

## 📬 Contato

- [LinkedIn](https://www.linkedin.com/in/anabbsilva)
- [GitHub](https://github.com/AnaBeatrizBentoSilva)
- [E-mail](mailto:anabento3807@gmail.com)
- [WhatsApp](https://wa.me/5511989949992)
