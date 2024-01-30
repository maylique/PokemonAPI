import React, { useContext ,useEffect} from 'react'
import { Link } from  'react-router-dom'
import { mainContext } from '../../context/MainProvider'
const Nav = () => {
    const {search, setSearch, darkmodeStatus, setDarkmodeStatus} = useContext(mainContext)
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
      console.log("darkmode:", darkmodeStatus)
      
    }    
    
  //   useEffect(() => {
  //     if (darkmodeStatus) {
  //         document.body.id = 'dark';
  //     } else {
  //         document.body.id = 'white';
  //     }
  // }, [darkmodeStatus]);

  return (
    <div id='nav'>
        <Link to= "/"><img src="https://cdn.pidgi.net/images/thumb/b/b8/Logo_-_Pokemon_20th_Anniversary.svg/735px-Logo_-_Pokemon_20th_Anniversary.svg.png" alt="Pokemon Logo" /></Link>
        <form onSubmit={setSearch}>
            <button id='buttonBack'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></button>
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
