import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home'
import NavBar from './components/Navbar/NavBar'
import { Route,Routes } from 'react-router-dom'
import News from './views/News/News'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/news' element={<News></News>}></Route>
    </Routes>
    
    </>
  )
}

export default App
