
import React from 'react'
import Body from './Components/Body'
import HotstartNavbar from './Components/HotstartNavbar'
import SubSlides from './Components/Slides'
import Slide2 from './Components/Slide2'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Movies from './Components/Movies'

const App = () => {
  return (
    <>
   
      <BrowserRouter>
      <HotstartNavbar />
      
     
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movies/>}/>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
