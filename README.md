# Storybook components

## Configuracion para despliege automatico

### package.json

* Cambiar name. Debe ser unico
* private false
* license MIT
* typings
* main
* homepage
* repository
* peerDependencies
* release
* files
* scripts
* plugins
* Instalar dependencias
```bash
npm i -D rimraf
npm i -D copyfiles
```
Ejemplo:
```json
{
    ...
    "name": "ic-my-storybook-components",
    "private": false,
    "license": "MIT",
    "typings": "dist/index.d.ts",
    "main": "dist/index.js",
    "homepage": "",
    "repository": {
        "url": "https://github.com/IoelChejas/sb-components",
        "type": "git"
    },
    "peerDependencies": {
        "react": ">=16"
    },
    "release": {
        "branches": [
            "main"
        ]
    },
    "files": [
        "dist",
        "src"
    ],
    "scripts": {
        ...
        "build": "npm run clean && tsc && npm run copy-files",
        "clean": "rimraf dist/",
        "copy-files": "copyfiles -u 1 src/**/*.css dist/"
        ...
    },
    "plugins": [
        ...
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/github",
        "@semantic-release/npm",
        "@semantic-release/git"
        ...
    ]
}
```

### tsconfig.json

* compilerOptions outDir: dist
* compilerOptions declaration: true
* compilerOptions noEmit: false
* compilerOptions module: commonjs

```json
{
  "compilerOptions": {
    ...
    "outDir": "dist",
    "declaration": true,
    "module": "commonjs",
    "noEmit": false,
    ...
  },
  "include": [
    "src"
  ]
}
```

### exportar componentes de la librería

```typescript
export { Button } from './components/Button';
```

### semantic release

* commits: fix: feat: perf:

### github: settings: developer settings: create token scope: repo

* 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

### npm profile access tokens new token to publish: 

* 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

### github: setting : secrets

* agregar secret: GH_TOKEN, NPM_TOKEN

### archivo main.yml: permite hacer el deploy automatico

```yml
# This is a basic workflow to help you get started with Actions

name: Semantic Release

permissions:
      contents: write

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Build App
        run: npm run build

      - name: Semantic Release
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: npx semantic-release

```