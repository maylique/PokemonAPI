import { useContext } from "react";
import HomeCard from "../components/HomeCard";

const pokemon = useContext()

const Home = () => {
    return ( 
        <>
        <HomeCard
        pokemon={pokemon}
         />
        </>
     );
}
 
export default Home;