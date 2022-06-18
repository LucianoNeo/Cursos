import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Elemento1 =()=>{
  return(
  <div className='textoInicial'>
    <p>'Meu primeiro react app!'</p>
  </div> 
  )
}
root.render(<Elemento1 />);
