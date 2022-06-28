import styled from 'styled-components'

const InputBusca = styled.input`
width: 50vw;
border-radius: 20px;
padding: 5px 10px;
border: none;
margin-bottom: 20px;
`


function Busca(props) {
    return(
    <InputBusca value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
    )
}


export default Busca