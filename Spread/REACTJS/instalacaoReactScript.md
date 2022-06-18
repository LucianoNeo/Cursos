# Para criar o sistema de arquivos base com CREATE REACT APP:
npx create-react-app nome_aplicativo


# Para visualizar o projeto rodando
npm start

# Arquivo HTML principal fica em 
public/index.html

# Arquivo JS principal fica em 
src/index.js

# index.js basico Inicial
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

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