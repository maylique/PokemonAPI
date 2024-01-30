import React, { useContext } from 'react'


const PokeCard = ({pokemon}) => {
  return (
    <div>
        <p>{pokemon.name}</p>
    </div>
  )
}

export default PokeCard
