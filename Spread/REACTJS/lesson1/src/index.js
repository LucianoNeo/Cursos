import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './Button'

const root = ReactDOM.createRoot(document.getElementById('root'));
const buttonB = <button>Botao 2</button>
// VARIAVEL PARA CONTROLE DO RENDER
const ligaBotao = true

const renderBotao1 = () =>(
<div><Button onClick={()=> {alert('clicou')}} name="Botao 1" /></div>
)

const renderBotao2 = () =>(
  <div>{buttonB} </div>
  )

//FUNCAO IF E ELSE TERNARIO CASO LIGABOTAO LIGADO LIGA 1 OU 2

const Elemento1 =()=>{
  return(
  <div className='textoInicial'>
    <p>'Meu primeiro react app!'</p>
    {ligaBotao ?  renderBotao1():renderBotao2()}  
  </div> 
  )
}



root.render(<Elemento1 />);
