import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Components/Card'
import './App.css'

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/"
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    axios(url).then((res) => {
      //console.log(res.data.results)
      setPokemons(res.data.results)
    })
  }, [])

  return (
    <>
      <h1>Pokemones</h1>
      <div className="poke-list">
        {pokemons.map((pokemon, index) => <Card key={index} {...pokemon}/>)}
      </div>
    </>
  )
}

export default App
