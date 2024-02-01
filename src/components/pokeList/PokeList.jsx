import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider'
import PokeCard from '../pokeCard/pokeCard'

const PokeList = () => {

    const {search,searchList, pokeList} = useContext(mainContext)
    // if(search.length < 1){
        return (
            <>
            <div id='pokelist' >
                {pokeList?.map?.((pokemon, index) => {
                    console.log("test")
                    return(
                        <div key={index}>
                            <PokeCard
                            pokemon = {pokemon}/>
                        </div>
                    )
                })}
            </div>
            </>)
    // )}else{
    //     return(
    //         <>
    //         <div id='searchlist'>
    //             {searchList?.map((pokemon, index) => {
    //                 return(
    //                     <div key={index}>
    //                         <PokeCard
    //                         pokemon = {pokemon}
    //                         index = {index}/>
    //                     </div>
    //                 )
    //             })}
    //         </div>
            
    //         </>
    //     )
    //     }
    }?



export default PokeList
