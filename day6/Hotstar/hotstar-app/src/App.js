
import React,{useContext} from 'react'
import Body from './Components/Body/Body'
import HotstartNavbar from './Components/Header/HotstarNavbar'
// import SubSlides from './Components/Slides'
// import Slide2 from './Components/Slide2'
import Home from './Pages/Home'
//import "./Components/Header.scss"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Movies from './Components/Movies/Movies'
import {ThemeContext, ThemeContextProvider}  from './Context/ThemeContextProvider'

const App = () => {
 
  return (
    <>
 
   <ThemeContextProvider>
   
  
      <BrowserRouter>
      <HotstartNavbar />
      
     
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movies/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeContextProvider>
      
      </>
  )
}

export default App
