# Para criar o sistema de arquivos base com CREATE REACT APP:
npx create-react-app nome_aplicativo


# Para visualizar o projeto rodando
npm start

# Arquivo HTML principal fica em 
public/index.html

# Arquivo JS principal fica em 
src/index.js

# index.js basico Inicial
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

# O QUE É UM COMPONENTE REACT?
É uma função com JSX dentro, que é utilizada para inserir elementos na página com o método render.

//Criação do primeiro componente (sempre com letra inicial Maisucula)
const Elemento1 =()=>{
  return(
  <div className='textoInicial'>
    <p>'Meu primeiro react app!'</p>
  </div> 
  )
}
// Renderização do componente chama-se com < componte />
root.render(<Elemento1 />);
```

# Chamada de componente em arquivo externo.
cria-se o arquivo com o nome do componente.jsx

- Conteudo do arquivo base:
```
import React from "react";

function Button(params) {
    return(

    )
}

export default Button
```
