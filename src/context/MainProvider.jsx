import React, { createContext, useState ,useEffect} from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [search, setSearch] = useState("")
    const [searchList, setSearchList] = useState([])
    const [darkmodeStatus, setDarkmodeStatus] = useState(false)
    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        const apiFetch = async() => {
            
            const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=130')
            setPokeList(resp.data.results)
            console.log("resp" , resp.data.results)
        }
        // { category ? apiFetch() : null}
        apiFetch()
    }, [])
    return (
    <>
        <mainContext.Provider value={{searchList, setSearchList, pokeList, setPokeList, darkmodeStatus, setDarkmodeStatus, search, setSearch}}>
            {children}
        </mainContext.Provider>
    </>
    )
}

export default MainProvider