<h1>⚡ Vidly - A Movie Website 🎥</h1>
<p align="center"><a href="https://github.com/TAKANOME-DEV/vidly-client"><img alt="GitHub Actions status" src="https://github.com/TAKANOME-DEV/vidly-client/actions/workflows/codeql-analysis.yml/badge.svg"></a></p>

A movie website where you can rent movies that you want to watch.
See [vidly-server](https://github.com/TAKANOME-DEV/vidly-client) for back-end code.

# ⬇️ Installation

- Clone the project: `git clone https://github.com/TAKANOME-DEV/vidly-client.git`
- Install dependencies: `npm install` or `yarn install` or `pnpm install`
- Optional: create `.eslintrc.json` file and add the following config:

  ```json
  {
   "env": {
    "browser": true,
    "es2021": true
   },
   "extends": [
    "eslint:recommended",
    // "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
   ],
   "parser": "@typescript-eslint/parser",
   "parserOptions": { "project": ["./tsconfig.json"] },
   "plugins": ["react", "@typescript-eslint"],
   "rules": {
    "prefer-destructuring": "error",
    "no-duplicate-imports": "error"
   }
  }
  ```

- Run the start script 😉

# Using Docker 🐬

- Build an image: `docker build -t vidly-client .`
- Start a container: `docker run -d -p 3000:3000 vidly-client`

# 💭 Feedback

If you like this project, give it a star ✨

If you have suggestions, please start a Discussion!
