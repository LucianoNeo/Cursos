import { useState , useEffect } from 'react'
import styled from 'styled-components' // para estilização dentro do JSX
import cdzImg from '../../images/seiya.png'
import { Quotes } from '../../components/quotes/Quotes'
import {getQuote} from '../../services/quotesService'

export function App() {

  let mounted = false;
  const [quoteState, setQuoteState] = useState({
    quote: 'Frase', 
    speaker: 'Autor'
  })
  

  const onUpdate = async () =>{
    const quote = await getQuote()
    setQuoteState(quote)
  }

useEffect(() =>{
  onUpdate()
},[])

  return( 
  <Conteudo>
    <Quotes 
    quote={quoteState.quote} 
    speaker={quoteState.speaker} 
    onUpdate={onUpdate}/>
    <SeiyaImg src={cdzImg} alt='Seiya de CDZ'/>
  </Conteudo>
)
}

// para criar a variavel de css utilizar const com letra maiuscula no começo, e chama-la no lugar da div
const Conteudo = styled.div`
height: 100vh;
padding: 0 50px;
display:flex;
justify-content: space-between;
align-items: center;
`
//estilização de imagem, colocar o nome da const como tag da imagem no render
const SeiyaImg = styled.img`
max-width: 50vw;
max-height: 90vh;
align-self: flex-end;
justify-content: flex-end;
`