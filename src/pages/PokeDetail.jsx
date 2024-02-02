import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import clsx from 'clsx'

const PokeDetail = () => {
    const id = useParams()
    const [pokePage, setPokePage] = useState()

    let apiLinkPage = `https://pokeapi.co/api/v2/pokemon/${id.id}/`

    useEffect(() => {
        const apiFetch = async () => {
            const resp = await axios.get(apiLinkPage)
            setPokePage(resp?.data)
            console.log(resp?.data);
        }
        apiFetch()
    }, [])


return (
    <>
    <Link to= "/"><img className="logo" src="https://cdn.pidgi.net/images/thumb/b/b8/Logo_-_Pokemon_20th_Anniversary.svg/735px-Logo_-_Pokemon_20th_Anniversary.svg.png" alt="Pokemon Logo" /></Link>
        {pokePage ? (
            <>
                <section className="height">
                    <img className="bigPls" src={pokePage.sprites?.front_shiny} alt="" />
                    <div className="typebtn">
                        <div className="gapPls">
                            {pokePage.types.map((pokemon, index) => {
                                return (
                                    <button onClick={'placeholder'} className={clsx(pokemon.type.name, 'gapPls')} key={index}>{pokemon.type.name}</button>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </>
        ) : (
            <p>Loading...</p>
        )}
    </>
);
}
 
export default PokeDetail;