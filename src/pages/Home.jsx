import { useContext } from "react";
import HomeCard from "../components/HomeCard";
import { mainContext } from "../context/MainProvider";
import { Link, useParams } from "react-router-dom";
import SearchFunc from "../components/SearchFunc";
import DarkMode from "../components/DarkMode";


const Home = () => {
    const { pokemonData, setPokemonData,apiURL, setApiURL, setNextURL, search, darkMode, setdarkMode} = useContext(mainContext)
    const id = useParams()

    

    return ( 
        <>
                <header>
                <Link to= "/"><img className="logo" src="https://cdn.pidgi.net/images/thumb/b/b8/Logo_-_Pokemon_20th_Anniversary.svg/735px-Logo_-_Pokemon_20th_Anniversary.svg.png" alt="Pokemon Logo" /></Link>
                    <div className="nav">
                        <Link to='/types'><button className="typeBtn">Types</button></Link>
                        <SearchFunc />
                        <DarkMode
                        darkMode={darkMode}
                        setdarkMode={setdarkMode} />
                    </div>
                </header>

            <main className="grid">
                {pokemonData.filter(pokemon => (pokemon.name).toLowerCase().includes(search)).map((pokemon, index) => {
                    return(
                        <HomeCard key={index}
                            pokemon={pokemon}
                    />
                    )
                })}
            </main>
            {/* <button onClick={()=>}>hahhaah</button> */}
        </>
     );
}
 
export default Home;