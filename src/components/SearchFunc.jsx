import { useContext } from "react";
import { mainContext } from "../context/MainProvider";

const SearchFunc = () => {

    const {setSearch} = useContext(mainContext)

    return ( 
        <>
            <input type="text" placeholder="search for pokemon" onChange={(e) => {setSearch(e.target.value.toLowerCase())}}/>
        </>
     );
}
 
export default SearchFunc;