// import  Header  from "./Linkedin/Header/Header";
import React from "react";
import { BrowserRouter,Switch,Routes,Route,Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Dashborad from './Components/Dashborad';
import Navbar from './Components/Navbar';




function App() {
  return (
    <>
   
   <BrowserRouter>
   
     <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link> 
             <Link to="/dashboard"><li>Dashboard</li></Link> 
            <Routes>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/dashboard' element={<Dashborad/>}/>
              </Routes>
             {/* <Navbar/>  */}
            </BrowserRouter>  
     {/* <Header></Header> */}
   
    
    
    
   
    

 </>
  );
}

export default App;
