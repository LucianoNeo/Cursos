import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';


let pokemon = []

axios.get('https://pokeapi.co/api/v2/pokemon/1')
  .then((response) => {
  pokemon = response.data
 
})

.catch(error =>{
  alert('deu ruim' + error)
})



export const LoadPokemon = () => {

console.log(pokemon)
  return (
    <div>
     <p>ID: {pokemon.id}</p>
     <p>Nome: {pokemon.name}</p>
     <img src={pokemon.sprites.front_default} alt="" srcset="" />
     <p>Tipos: {pokemon.types[0].type.name} | {pokemon.types[1].type.name}</p>
     
     
    </div>
  )
}


