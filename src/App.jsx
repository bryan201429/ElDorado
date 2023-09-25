import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home'
import NavBar from './components/Navbar/NavBar'
import { Route,Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    
    </>
  )
}

export default App
