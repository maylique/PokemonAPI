
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PokeDetail from './pages/PokeDetail'
import Types from './pages/Types'
import TypeCard from './components/typeCard/TypeCard'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons/:id' element={<PokeDetail />} />
        <Route path='/types' element={<Types />} />
        <Route path='/types/:type' element={<TypeCard />} />
    </Routes>
    </>
  )
}

export default App
