import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider'
import Nav2 from '../../components/nav/Nav2'

const Detail = () => {
    const {pokeName, setPokeName, pokeDetail} = useContext(mainContext)
    // setPokeName(1)
    let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDetail?.id}.png`
    let num
    console.log(pokeDetail)
    switch(pokeDetail?.id?.toString().length){
        case 1:
            num= `#000${pokeDetail?.id}`;
            break;
        case 2:
            num= `#00${pokeDetail?.id}`;
            break;
        case 1:
            num= `#0${pokeDetail?.id}`;
            break;
        case 1:
            num= `#${pokeDetail?.id}`;
            break;
        
    }


  return (
    <>
        <Nav2/>
        <img src={link} alt="" />
        <div>
            <p>{num}</p>
            <p>{pokeName}</p>
        </div>
        <div id='types'>
            {pokeDetail?.types?.map((type, index)=>{
                return(
                    <p>{type?.type.name}</p>
                )
            })}
        </div>
        <div id='abilities'>
            {pokeDetail?.abilities?.map((ability, index)=>{
                return(
                    <p>{ability?.ability?.name}</p>
                )
            })}
        </div>

    </>
  )
}

export default Detail
