import React, { useContext ,useEffect} from 'react'
import { Link } from  'react-router-dom'
import { mainContext } from '../../context/MainProvider'
const Nav = () => {
    const {searchList, setSearchList,pokeList, setPokeList, search, setSearch, darkmodeStatus, setDarkmodeStatus} = useContext(mainContext)
    const darkmodeToggle = (event)=>{
      event.preventDefault()
      if (darkmodeStatus){
        document.body.id = 'white';
        setDarkmodeStatus(false)
      }
      else{
        document.body.id = 'dark';
        setDarkmodeStatus(true)
      }
      setPokeList(filteredList)
    }    
    
  useEffect(()=> {
      const filteredList = pokeList.filter( pokemon => pokemon.name.toLowerCase().includes(search))
      setSearchList(filteredList)
    },[search])


  return (
    <div id='nav'>
        <Link to= "/"><img src="https://cdn.pidgi.net/images/thumb/b/b8/Logo_-_Pokemon_20th_Anniversary.svg/735px-Logo_-_Pokemon_20th_Anniversary.svg.png" alt="Pokemon Logo" /></Link>
        <form>
            <Link to = "/types">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
    <path d="M0 18.3333C0 19.2538 0.746192 20 1.66667 20H22.3333C23.2538 20 24 19.2538 24 18.3333C24 17.4129 23.2538 16.6667 22.3333 16.6667H1.66667C0.746193 16.6667 0 17.4129 0 18.3333ZM0 10C0 10.9205 0.746192 11.6667 1.66667 11.6667H22.3333C23.2538 11.6667 24 10.9205 24 10C24 9.07952 23.2538 8.33333 22.3333 8.33333H1.66667C0.746193 8.33333 0 9.07952 0 10ZM1.66667 0C0.746193 0 0 0.746192 0 1.66667C0 2.58714 0.746192 3.33333 1.66667 3.33333H22.3333C23.2538 3.33333 24 2.58714 24 1.66667C24 0.746192 23.2538 0 22.3333 0H1.66667Z" fill="#EBEBEB"/>
  </svg>
            </Link>
            <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={darkmodeToggle}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<g clipPath="url(#clip0_151_274)">
<path d="M0.390625 12.5C0.390625 19.1878 5.81216 24.6094 12.5 24.6094C19.1878 24.6094 24.6094 19.1878 24.6094 12.5C24.6094 5.81221 19.1878 0.390625 12.5 0.390625C5.81221 0.390625 0.390625 5.81216 0.390625 12.5ZM12.5 21.4844V3.51562C17.4661 3.51562 21.4844 7.53472 21.4844 12.5C21.4844 17.4661 17.4653 21.4844 12.5 21.4844Z" fill="white"/>
</g>
<defs>
<clip-path id="clip0_151_274">
<rect width="25" height="25" fill="white"/>
</clip-path>
</defs>
</svg></button>
        </form>
    </div>
  )
}

export default Nav
