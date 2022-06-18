import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Elemento1 =()=>{
  return(
  <div>
    <p>'Meu primeiro app com webkit+ react!'</p>
    <Button onClick={()=> {alert('clicou')}} name="conteudo do botao" />
  </div> 
  )
}

root.render(<Elemento1 />);
