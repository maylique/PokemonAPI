import { useContext } from "react";
import HomeCard from "../components/HomeCard";
import { mainContext } from "../context/MainProvider";


const Home = () => {
    const { pokemonData, setPokemonData,apiURL, setApiURL, setNextURL} = useContext(mainContext)
    console.log(pokemonData);
    return ( 
        <>
            {pokemonData.map((pokemon, index) => {
                return(
                    <HomeCard key={index}
                pokemon={pokemon}
                />
                )
            })}
            {/* <button onClick={()=>}>hahhaah</button> */}
        </>
     );
}
 
export default Home;