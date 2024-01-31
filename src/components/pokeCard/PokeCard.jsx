import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Detail from '../../pages/detail/Detail';
import { mainContext } from '../../context/MainProvider';
import axios from 'axios';


const PokeCard = ({pokemon,index}) => {
    const {setPokeName, setPokeId, pokeId} = useContext(mainContext)
    let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
    let num = null
    let name = pokemon.name
    let fetchLink = pokemon.url

    useEffect(() =>{
        const apiFetch = async() => {
            const resp = await axios.get(fetchLink)
            setPokeId(resp.data)
        }
        apiFetch()
    },[])
    console.log("ID:", pokeId)
    console.log("pokemon:" , pokemon)
    switch(pokeId.length){
        case 1:
            num= `#000${pokeId}`;
            break;
        case 2:
            num= `#00${pokeId}`;
            break;
        case 3:
            num= `#0${pokeId}`;
            break;
        case 4:
            num= `#${pokeId}`;
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
