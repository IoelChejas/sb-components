# Storybook components

## Configuracion para despliege automatico

### package.json

* private = false
* Cambiar name. Debe ser unico
* licence: MIT
* typings: dist/index.d.ts
* main: dist/index.js
* homepage
* repository url: mi github type: git
* release branches: main
* files: dist, src

### tsconfig.json

* compilerOptions outDir: dist
* compilerOptions declaration: true
* compilerOptions noEmit: false
* compilerOptions module: commonjs

### src/index.tsx

* Exportar componentes
* comando tsc genera dist

### package.json build

* npm run clean && tsc && npm run copy-files
* npm i -D rimraf
* npm i -D copyfiles
* nuevos scripts: 
* "clean": "rimraf dist/"
* "copy-files": "copyfiles -u 1 src/**/*.css dist/"

### package.json peerDependencies
* react
* typescript

### semantic release

* npm i -D semantic-release
* agregar plugins: "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/git"
],
* commits: fix: feat: perf:

### github: settings: developer settings: create token scope: repo

* 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

### npm.js profile access tokens new token: 

* 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

### github: setting : secrets

* agregar secret: GH_TOKEN, NPM_TOKEN