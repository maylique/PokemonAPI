import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Detail from '../../pages/detail/Detail';
import { mainContext } from '../../context/MainProvider';


const PokeCard = ({pokemon}) => {
    const {setPokeName} = useContext(mainContext)
    let id = pokemon.id
    let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    let num
    let name = pokemon.name
    console.log("CARDcheck")
    // let fetchLink = pokemon.url

    // useEffect(() =>{
    //     const apiFetch = async() => {
    //         const resp = await axios.get(fetchLink)
    //         setPokeId(resp.data.id)
    //     }
    //     apiFetch()
    // },[pokemon])
    switch(pokemon.id.length){
        case 1:
            num= `#000${id}`;
            console.log("idcheck")
            break;
        case 2:
            num= `#00${id}`;
            break;
        case 3:
            num= `#0${id}`;
            break;
        case 4:
            num= `#${id}`;
            break;
        
    }
  return (
    <>
    <div>
        <p>test</p>
        <img src={link} alt="imgPokemon" />
        <p>{num}</p>
        <p>{pokemon.name}</p>
    </div>
    <Link to={"/detail"}><button onClick={setPokeName(name)}>details</button></Link>
  </>)
}

export default PokeCard
