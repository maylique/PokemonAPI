import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const HomeCard = ({ pokemon }) => {
    
    const id = useParams()

    const [img, setImg] = useState()
    const [pokeData, setPokeData] = useState()
    let imgUrl = pokemon.url
    useEffect(() => {
        const getImage = async () => {
            const resp = await axios.get(imgUrl)
            setImg(resp.data.sprites.front_default)
        }
        getImage()

        const getPokeData = async () => {
            const resp = await axios.get(imgUrl)
            setPokeData(resp.data.id)
        }
        getPokeData()
    }, [imgUrl])



    return ( 
        <>
        <Link to={`/pokemons/${pokeData}`}>
        <div className="card">
            <img src={img} alt="" />
            <p>{pokemon.name}</p>
                <p>#{pokeData}</p>
        </div>
            </Link>
        </>
     );
}
 
export default HomeCard;