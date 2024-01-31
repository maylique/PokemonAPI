import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [apiURL, setApiURL] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [pokemonData, setPokemonData] = useState([])
    const [nextURL, setNextURL] = useState()
    
    useEffect(() => {
        // const next = () => {
        //     setNextURL(resp.data.next)
        // }
        // next()
        const getPokemon = async () => {
            const resp = await axios.get(apiURL)
            setPokemonData(resp.data.results)
            // window.onscroll = function () {
                //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    //         setApiURl(resp.data.next)
                    //     }
                    // }
                } 
        getPokemon()
}, [apiURL])
    
    return ( 
    <>
        <mainContext.Provider value={{pokemonData, setPokemonData, setApiURL, apiURL, nextURL, setNextURL}}>
            {children}
        </mainContext.Provider>
    </> 
    );
}
 
export default MainProvider;