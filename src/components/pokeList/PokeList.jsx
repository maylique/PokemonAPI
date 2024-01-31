import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider'
import PokeCard from '../pokeCard/pokeCard'

const PokeList = () => {
    const {search,searchList, pokeList, setPokeList, urlList, setUrlList} = useContext(mainContext)
    if(search.length < 1){
        return (
            <>
            <div id='pokelist' >
                {urlList?.map((pokemon, index) => {
                    return(
                        <div key={index}>
                            <PokeCard
                            pokemon = {pokemon}
                            index = {index}/>
                        </div>
                    )
                })}
            </div>
            </>
    )}else{
        return(
            <>
            <div id='searchlist'>
                {searchList?.map((pokemon, index) => {
                    return(
                        <div key={index}>
                            <PokeCard
                            pokemon = {pokemon}
                            index = {index}/>
                        </div>
                    )
                })}
            </div>
            
            </>
        )
        }
    }



export default PokeList
