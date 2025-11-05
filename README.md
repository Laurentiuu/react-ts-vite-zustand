# React + Vite + TypeScript Template + Zustand

A minimalistic template for kickstarting React projects with Vite and TypeScript.

## 🎉 Features

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast, opinionated frontend build tool.
- **Zustand** - In my opinion the easiest to handle state management tool.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS** - A utility-first CSS framework.
- **Tailwind Prettier Plugin** - A Prettier plugin for formatting Tailwind CSS classes.
- **ESLint** - A pluggable linting utility for JavaScript and TypeScript.
- **PostCSS** - A tool for transforming CSS with JavaScript.
- **react-router-dom** -The easiest to use routing react library.
- **heroicons** -Library for all types of icons.
- **personal utilities** -A lot of util files in /lib directory.

## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 16 or above => https://nodejs.org/en/download )
- Yarn (package manager => https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## 🚀 Getting Started

Follow these steps to get started with the react-vite-ts template:

1. Clone the repository:

   ```bash
   git clone https://github.com/Laurentiuu/react-ts-vite-zustand.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-vite-ts
   ```

3. Install the dependencies:

   ```bash
    yarn
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

## 📜 Available Scripts

- yarn start - Starts the development server.
- yarn build - Builds the production-ready code.
- yarn lint - Runs ESLint to analyze and lint the code.
- yarn preview - Starts the Vite development server in preview mode.

## 📂 Project Structure

The project structure follows a standard React application layout:

```python
react-vite-ts/
  ├── node_modules/                # Project dependencies
  ├── public/                      # Public assets
  ├── src/                         # Application source code
  │   ├── assets/                  # Project assets
  │   ├── components/              # React components
  │   │      ├── Button.tsx        # React Button with different variants
  │   │      ├── Card.tsx          # React Card
  │   │      ├── Dropdown.tsx      # React Dropdown
  │   ├── lib/                     # Utility functions
  │   │    ├──...                  # personal utils
  │   ├── pages/                   # Homepage when you open the app
  │   │      ├── Home.tsx          # React Home Page
  │   ├── router/                  # App routes
  │   │      ├── Protected.tsx     # React Component to protect the route (pages after login for example)
  │   │      ├── routes.ts         # Files to store the string routes
  │   ├── stores/                  # Project Zustand stores
  │   │      ├── useThemeStore.ts  # Simple store for theme mode
  │   ├── App.tsx                  # Application entry point
  │   └── index.scss               # Main styling file
  │   └── index.tsx                # Main rendering file
  ├── .eslintrc.json               # ESLint configuration
  ├── index.html                   # HTML entry point
  ├── postcss.config.js            # PostCSS configuration
  ├── tailwind.config.js           # Tailwind CSS configuration
  ├── tsconfig.json                # TypeScript configuration
  └── vite.config.ts               # Vite configuration
```
