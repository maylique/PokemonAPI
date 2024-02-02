import { useContext } from "react";
import { mainContext } from "../context/MainProvider";
import { Link, useParams } from "react-router-dom";
import clsx from 'clsx'
import DarkMode from "../components/DarkMode";

const Types = () => {

    const { pokeType, setPokeType } = useContext(mainContext)

    const type = useParams()


    return (
        <><Link to= "/"><img className="logo" src="https://cdn.pidgi.net/images/thumb/b/b8/Logo_-_Pokemon_20th_Anniversary.svg/735px-Logo_-_Pokemon_20th_Anniversary.svg.png" alt="Pokemon Logo" /></Link>
            <section className="typeSection">
                {pokeType.map((el, index) => {
                    return (
                        <div  key={index}>
                            <Link to={`/types/${el.name}`}><button  className={clsx(el.name, 'pokeTypes')} >{el.name}</button></Link>
                        </div>
                    )
                })}
            </section>
        </>
    );
}

export default Types;