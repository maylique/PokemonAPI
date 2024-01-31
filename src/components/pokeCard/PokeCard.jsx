import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Detail from '../../pages/detail/Detail';
import { mainContext } from '../../context/MainProvider';


const PokeCard = ({pokemon,index}) => {
    const {setPokeName} = useContext(mainContext)
    let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
    let num = null
    let name = pokemon.name
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
    <>
    <div>
        <img src={link} alt="" />
        <p>{num}</p>
        <p>{pokemon.name}</p>
    </div>
    <Link to={"/detail"}><button onClick={setPokeName(name)}>details</button></Link>
  </>)
}

export default PokeCard
