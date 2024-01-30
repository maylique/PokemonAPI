import React, { createContext, useState ,useEffect} from 'react'
import axios from 'axios'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [search, setSearch] = useState("")
    const [searchList, setSearchList] = useState([])
    const [darkmodeStatus, setDarkmodeStatus] = useState(false)
    const [pokeList, setPokeList] = useState([])
    const [pokeName, setPokeName] = useState("")
    const [pokeDetail, setPokeDetail] = useState([])

    useEffect(() => {
        const apiFetch = async() => {
            
            const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=13')
            setPokeList(resp.data.results)
            console.log("resp" , resp.data.results)
        }
        apiFetch()
    }, [])
    
    useEffect(() =>{
        const apiFetch = async() => {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            setPokeDetail(resp.data)
        }
        apiFetch()
    },[pokeName])
    return (
    <>
        <mainContext.Provider value={{setPokeName, pokeDetail, searchList, setSearchList, pokeList, setPokeList, darkmodeStatus, setDarkmodeStatus, search, setSearch}}>
            {children}
        </mainContext.Provider>
    </>
    )
}

export default MainProvider