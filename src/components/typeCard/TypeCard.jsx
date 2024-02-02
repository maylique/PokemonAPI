import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import SearchFunc from "../../components/SearchFunc";

import axios from "axios";
import { mainContext } from "../../context/MainProvider";
import TypePokomen from "../typePokemon/TypePokomen";

const TypeCard = () => {

    const { pokemonData, setPokemonData, apiURL, setApiURL, setNextURL, search } = useContext(mainContext)


    const [pokemonNachType, setPokemonNachType] = useState([])

    const type = useParams()
    useEffect(() => {
        const getPokemon = async () => {
            const resp = await axios.get(`https://pokeapi.co/api/v2/type/${type.type}`)
            setPokemonNachType(resp.data.pokemon)
        }
        getPokemon()
    }, [type.type])



console.log(pokemonNachType);


    return (
        <>
        <Link to= "/"><img className="logo" src="https://cdn.pidgi.net/images/thumb/b/b8/Logo_-_Pokemon_20th_Anniversary.svg/735px-Logo_-_Pokemon_20th_Anniversary.svg.png" alt="Pokemon Logo" /></Link>
        <header>
            <SearchFunc />
        </header>
            {/* <main className="grid">
                {pokemonNachType.map((pokemon, index) => {
                    console.log(pokemon);
                    return (
                        <div key={index}>
                            <TypePokomen
                                link={pokemon.pokemon.url}
                            />
                        </div>
                    )
                })}
            </main> */}
            <main className="grid">
                {pokemonNachType.filter(pokemon => (pokemon.pokemon?.name).toLowerCase().includes(search)).map((pokemon, index) => {
                    return(
                        <TypePokomen key={index}
                                link={pokemon.pokemon.url}
                            />
                    )
                })}
            </main>
        </>
    );
}

export default TypeCard;