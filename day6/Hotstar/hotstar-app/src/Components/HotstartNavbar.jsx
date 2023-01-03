import React from 'react'
import { CgMenuCheese } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.scss"

const HotstartNavbar = () => {


  const [open, setOpen] = React.useState();

  const handleOpen = () => {
    setOpen(!open);
  };
  
  return (
    <>
      <div className='Header'>
        <div className='Header-left'>

          <ul>
            <li className='icon'><CgMenuCheese /> </li>
            <li><img class="brand-logo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"></img></li>
            <li>Tv </li>
            <Link to="/Movies" ><li>Movies </li></Link>
            <li>Sports</li>
            <li>Disney+</li>
            <li className='color'>KIDS</li>
          </ul>

        </div>

        <div className='Header-right'>


          <div className='right'>
            <input className="search" type="search" placeholder='search' />

            <div className='icon_div'><BsSearch className='icon' /></div>
          </div>
        </div>


        <div className='last'>
          <button>SUBSCRIBE</button>
        </div>
        <div className='logo' onMouseOver={handleOpen}><CgProfile />
          {open ? (<ul className='menu-list'><li> WatchList</li><li> My Account</li><li> log OUt</li></ul>) : null}


        </div>






      </div>



    </>
  )
}

export default HotstartNavbar