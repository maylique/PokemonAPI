import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext()

const MainProvider = ({children}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        let apiURL = 'https://pokeapi.co/api/v2/pokemon/'
        const getPokemon = async () => {
            const resp = await axios.get(apiURL)
            console.log(resp.data.results);
            setPokemon(resp)
        } 
        getPokemon()
    }, [])
    
    return ( 
    <>
        <mainContext.Provider value={{}}>
            {children}
        </mainContext.Provider>
    </> 
    );
}
 
export default MainProvider;