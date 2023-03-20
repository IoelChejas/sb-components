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
* release branch: main
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