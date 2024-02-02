import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [apiURL, setApiURL] = useState("https://pokeapi.co/api/v2/pokemon/?limit=151")
    const [pokemonData, setPokemonData] = useState([])
    const [nextURL, setNextURL] = useState()
    const [search, setSearch] = useState('')
    const [pokeType, setPokeType] = useState([])
    const [darkMode, setdarkMode] = useState(true)


    useEffect(() => {
        const getType = async() => {
            const resp = await axios.get("https://pokeapi.co/api/v2/type/")
            setPokeType(resp.data.results)
        }
        getType()
    }, [])
    
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
        <mainContext.Provider value={{pokemonData, setPokemonData, setApiURL, apiURL, nextURL, setNextURL, search, setSearch, pokeType, setPokeType, darkMode, setdarkMode}}>
            {children}
        </mainContext.Provider>
    </> 
    );
}
 
export default MainProvider;