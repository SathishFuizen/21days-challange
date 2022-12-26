import React from 'react'
import './Header.css'
import { FaLinkedin} from 'react-icons/fa';
import { AiOutlineSearch } from "react-icons/ai";
import {   AiOutlineHome } from "react-icons/ai";
import { BsPersonPlusFill } from "react-icons/bs";
import { BsBagPlusFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineUser} from "react-icons/ai";
import { SiRos} from "react-icons/si";


function Header() {
  return (
    <>

    <div className='Header'>

      <div className='Header-left'>

        <div className='header-icon'>
         <div><FaLinkedin/></div>
        </div>

        <div className='header-search'>
         <div>< AiOutlineSearch/></div>
         <input type="text"  placeholder='search' />

        </div>
        </div>
        

      <div className='Header-middle'>
      <div className='Header-middle-icon'>
      <div>< AiOutlineHome/ ></div> Home
     </div>
      <div className='Header-middle-icon'>
      <div><BsPersonPlusFill></BsPersonPlusFill></div>Mynetwork</div>
      <div className='Header-middle-icon'>
      <div><BsBagPlusFill></BsBagPlusFill></div>Job</div>
      <div className='Header-middle-icon'>
      <div><AiFillMessage></AiFillMessage></div>Messaging</div>
      <div className='Header-middle-icon'>
      <div><AiOutlineNotification></AiOutlineNotification></div>Notifications</div>
      <div className='Header-middle-icon'>
      <div><AiOutlineUser></AiOutlineUser></div>Me
      <div className='main'>
        <div className='profile'>

        </div>

      </div>
      
      
      
      
      </div>
      </div>


      <div className='Header-right'>
      <div><SiRos></SiRos></div>Work</div>
      <a href="#" className='anchor'>Try premium for free</a>
     

      

    </div>
   
 
    
    </>
  )

}

export default Header
