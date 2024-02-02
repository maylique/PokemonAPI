import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const TypePokomen = ({ link }) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        const getPokemon = async () => {
            const resp = await axios.get(link)
            setPokemon(resp.data)
        }

        link ? getPokemon() : null
    }, [link])





    return (
        <>
        <Link className='card' to={`/pokemons/${pokemon?.id}`}>
            <img src={pokemon?.sprites.front_default} alt="" />
            <p>#{pokemon?.id}</p>
                <h2>{pokemon?.name}</h2>
        </Link>
        </>
    )
}

export default TypePokomen