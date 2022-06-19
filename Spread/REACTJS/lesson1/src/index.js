import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './Button'


const moradores = [
  {
    id:1,
    nome: 'Luciano'
  },
  {
    id:2,
    nome: 'Rosangela'
  },
  {
    id:3,
    nome: 'Davi'
  },
  {
    id:4,
    nome: 'Lara'
  },

]




const root = ReactDOM.createRoot(document.getElementById('root'));
const buttonB = <button>Botao 2</button>
// VARIAVEL PARA CONTROLE DO RENDER
const ligaBotao = false

const renderBotao1 = (
<div><Button onClick={()=> {alert('clicou')}} name="Botao 1" /></div>
)

const renderBotao2 =(
  <div>{buttonB} </div>
  )

  console.log(ligaBotao)

//FUNCAO IF E ELSE TERNARIO CASO LIGABOTAO LIGADO MOSTRA 1 OU DESLIGADO MOSTRA 2

const Elemento1 =()=>{

const renderMoradores = (morador, index) => {
  return(
    <li key={index}>{morador.nome}</li> //adicionar KEY para de elementos irmaos
  )
  
}


  return(
  <div className='textoInicial'>
    <h1>Meu primeiro react app!</h1>
    <h2>RENDERIZAÇÃO CONDICIONAL</h2>
    <p>Botao que muda ao ligar/desligar variavel</p>
   
    {ligaBotao ?  renderBotao1:renderBotao2}  
    
    <div>
    <h2>LISTAS E CHAVES</h2>
      <p>Renderizando lista de uma array</p>
    <ul>
    {moradores.map(renderMoradores)}
    </ul>
    <div>
      <h2>EVENTOS</h2>
      {ButtonEvent} 
    </div>
  </div>
  </div> 
  
  )
}

//////////////////// EVENTOS ///////////////////
const showEvent = (e) => {
console.log('evento clicado');
console.log(e);
}

const ButtonEvent = <button onClick={showEvent} >Mostrar Evento</button>

root.render(<Elemento1 />);
