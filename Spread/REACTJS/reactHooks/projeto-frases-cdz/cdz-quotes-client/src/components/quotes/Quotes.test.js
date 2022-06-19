import {render, screen} from '@testing-library/react'
import { Quotes } from './Quotes'

const quote = 'frase teste'
const speaker = 'autor aleatorio'


test('renderiza frase, autor e botao', () =>{
  render(<Quotes quote={quote} speaker={speaker} />)


const quoteEl = screen.getByText(quote)
const speakerEl = screen.getByText(speaker)
const buttonEl = screen.getByRole('button')

expect(quoteEl).toBeInTheDocument()
expect(speakerEl).toBeInTheDocument()
expect(buttonEl).toBeInTheDocument()

})