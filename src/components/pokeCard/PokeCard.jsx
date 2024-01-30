import React, { useContext } from 'react'


const PokeCard = ({pokemon,index}) => {
    let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
    let num = null
    switch(index?.toString().length){
        case 1:
            num= `#000${index+1}`;
            break;
        case 2:
            num= `#00${index+1}`;
            break;
        case 1:
            num= `#0${index+1}`;
            break;
        case 1:
            num= `#${index+1}`;
            break;
        
    }
  return (
    <div>
        <img src={link} alt="" />
        <p>{num}</p>
        <p>{pokemon.name}</p>
    </div>
  )
}

export default PokeCard
