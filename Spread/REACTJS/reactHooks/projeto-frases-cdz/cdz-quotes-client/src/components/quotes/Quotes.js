import styled from 'styled-components'
import {string} from 'prop-types' // para definicão de tipagem
import { Button } from '../../components/button/Button'

export const Quotes = ({ quote, speaker, onUpdate}) => {
  return (
    <div>
      <Quote>{quote}</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onClick={onUpdate}>Gerar frase</Button>
    </div>
  );
};

Quotes.propTypes = {
  quote: string,
  speaker: string,
 // onUpdate: func
}

const Quote = styled.p`
font-size: 1.5em;
margin: 0;
color: white;
text-shadow: -2px -2px 2px rgba(0, 0, 0, 1);
`

const Speaker = styled(Quote)`
font-size: 2em;
text-align : right;
margin-bottom: 50px;
`