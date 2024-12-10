import { useState, useEffect } from 'react'
import axios from 'axios'

const Card = ({name, url}) => {
  const [pokeArtwork, setPokeArtwork] = useState({})

  useEffect(() => {
    axios(url).then((res) => {
      //console.log(res.data.sprites.other["official-artwork"])
      setPokeArtwork(res.data.sprites.other["official-artwork"])
    })
  }, [])

  return (
    <div className="poke-item">
      <img src={pokeArtwork.front_default} alt={name}/>
      <h2>{name}</h2>
    </div>
  )
}

export default Card
