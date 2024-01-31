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
    const [pokeId, setPokeId] = useState("")
    const [urlList, setUrlList] = useState([])

    useEffect(() => {
        const apiFetch = async() => {
            
            const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=13')
            setUrlList(resp.data.results)
            console.log("resp" , resp.data.results)
        }
        apiFetch()
    }, [])
    useEffect(() => {
        const apiFetch = async() => {
            console.log("check")
            {urlList.forEach(async(url)=> {
                const resp = await axios.get(`${url.url}`)
                pokeList.push(resp.data)
            })}
        }
        apiFetch()
    }, [urlList])
    console.log("pokeList", pokeList) 
    useEffect(() =>{
        const apiFetch = async() => {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            setPokeDetail(resp.data)
        }
        apiFetch()
    },[pokeName])
    return (
    <>
        <mainContext.Provider value={{urlList, setUrlList, setPokeName, pokeDetail, searchList, setSearchList, pokeList, setPokeList, darkmodeStatus, setDarkmodeStatus, search, setSearch, pokeId, setPokeId}}>
            {children}
        </mainContext.Provider>
    </>
    )
}

export default MainProvider