import React from 'react'
import { CgMenuCheese } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { Link } from "react-router-dom";
// import "./Checkheader.scss"
 import { ThemeContext} from '../../Context/ThemeContextProvider'
import { useContext } from 'react';
// import '../Components/Hotstar.scss'
 import './Header.scss'


const HotstartNavbar = () => {

const {toggle,togglefunction} =useContext(ThemeContext);

  const [open, setOpen] = React.useState();

  const handleOpen = () => {
    setOpen(!open);
  };
  
  return (
    <>
   
      <div className="Header" style={{backgroundColor:toggle?"red":"black"}}>
        <div className='Header__Header-left'>
     
          <ul >
            
            <li className='icon'><CgMenuCheese /> </li>
            <li><img  src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"></img></li>
            <li>Tv </li>
            <Link to="/Movies" className='Header__Header-left__Movie'  ><li>Movies </li></Link>
            <li id="lisports" >Sports</li>
           
            <li>Disney+</li>
            <li className='color'>KIDS</li>
          </ul>

        </div>

        <div className='Header__Header-right'>


          <div className='Header__Header-right__right' >
            <input className="Header__Header-right__right__search" type="search" placeholder='search' />

            <div className='icon_div'><BsSearch className='Header__Header-right__right__icon' /></div>
          </div>
       <div  className="Header__Header-right__last">
         
                     <button onClick={togglefunction}>SUBSCRIBE</button>
                     
              
           
        </div>   
         </div>
      
     
        <div className="Header__Header-right__logo"   onMouseOver={handleOpen}><CgProfile />
            {open ? (<ul className='menu-list'><li> WatchList</li><li> My Account</li><li> log OUt</li></ul>) : null}  


        </div>






      </div>



    </>
  )
}

export default HotstartNavbar