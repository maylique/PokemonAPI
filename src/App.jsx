import Home from './pages/home/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/detail/Detail'

function App() {


  return (
    <>
        <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/detail' element= {<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
