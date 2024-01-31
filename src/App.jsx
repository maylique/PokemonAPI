import Home from './pages/home/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/detail/Detail'
import Types from './pages/types/types'

function App() {


  return (
    <>
        <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/detail' element= {<Detail/>}/>
        <Route path='/types' element= {<Types/>}/>
      </Routes>
    </>
  )
}

export default App
