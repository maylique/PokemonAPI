import { useParams } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import { useContext, useEffect } from "react";
import { mainContext } from "../context/MainProvider";
import axios from "axios";

const TypeGallery = () => {

    const { pokemonData, setPokemonData, apiURL, setApiURL, setNextURL, search } = useContext(mainContext)
    

    const type = useParams()
    useEffect(() => {
        const getPokemon = async () => {
            const resp = await axios.get(`https://pokeapi.co/api/v2/type/${type.type}`)
            setPokemonData(resp.data.pokemon)
                } 
        getPokemon()
}, [type.id])

    return ( 
        <>
            <main className="grid">
                {pokemonData.filter(pokemon => (pokemon.name).includes(search)).map((pokemon, index) => {
                    return(
                        <HomeCard key={index}
                            pokemon={pokemon}
                    />
                    )
                })}
            </main>
        </>
     );
}
 
export default TypeGallery;