# Instalação em modo desenvolvimento
```
npm i -D webpack webpack-cli
```
# Adicionar Babel
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

# Criar arquivo webpack.config.js com o seguinte conteudo
```
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundler.js'
    },

module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
},
```

# instalar react
npm i react react-dom
npm i -D babel-preset-react

# criar arquivo .babelrc
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
# criar scripts no package.json

```
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development"
  },
  ```

  # Criar um dev-server
  ```
  npm i -D webpack-dev-server
```
  # Adicionar o server aos scripts
  ```
  "start:dev":"webpack-dev-server"
  ```