import axios from "axios";
import { useEffect, useState } from "react";

const HomeCard = ({pokemon}) => {

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
        <img src={img} alt="" />
        <p>{pokemon.name}</p>
        <p>#{pokeData}</p>
        </>
     );
}
 
export default HomeCard;