import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import styled from 'styled-components'


const Container = styled.ul`
    margin: 0 auto;
    padding: 10px;
    background-color: rgb(42, 40, 40) ;
    width: 95vw;
    heigth: 98vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Card = styled.li`
    list-style-type: none;
    background-color: rgb(78, 76, 76) ;
    font-size: medium;
    border-radius: 20px;
    width: 150px;
    heigth: 150px;
    padding: 5px 10px 5px;
    color: white;
    margin-bottom: 10px;
    margin-right: 10px;
    line-height: .4;
    &:hover {
      background-color: rgb(23, 62, 75);
      transform: scale(1.5);
      transition: 50ms ease-in;
    }
`



const LoadPokemon = () => {
  const [pokemons, setPokemon] = useState([])


  // useEffect(()=>{
  //   async function puxaDados() {    
  //     for (let i = 1; i <= 151; i++){
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  //     const data = await response.json()
  //     setPokemon(prevState=>[...prevState, data])
  //   }
    
  // }
  //   puxaDados()
    
  // },[])

    useEffect(()=>{
    async function puxaDados() {    
      for (let i = 1; i <= 151; i++){
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      setPokemon(prevState=>[...prevState, response.data])
    }
    
  }
    puxaDados()
    
  },[])



  
if (pokemons === null) return <></>


  return (
    
    <Container>
       {pokemons.map( (pokemon) => 
       <Card key={pokemon.id}>
          <p>ID: {pokemon.id}</p>
          <p>Nome: {pokemon.name.toUpperCase()}</p>
          <img src={pokemon.sprites.front_default} alt='' style={{margin: '0 auto'}}/>       
        </Card>
        )}
    </Container>    
    
  )
  
}


export default LoadPokemon