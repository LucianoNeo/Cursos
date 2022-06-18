import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './Button'

const root = ReactDOM.createRoot(document.getElementById('root'));
const Elemento1 =()=>{
  return(
  <div className='textoInicial'>
    <p>'Meu primeiro react app!'</p>
    <Button onClick={()=> {alert('clicou')}} name="conteudo do botao" />
  </div> 
  )
}



root.render(<Elemento1 />);
