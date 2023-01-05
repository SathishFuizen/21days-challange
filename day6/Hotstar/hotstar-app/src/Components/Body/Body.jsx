import React from 'react'
import { Slide } from "react-slideshow-image"
import "./Body.css"
import 'react-slideshow-image/dist/styles.css'


const Body = () => {
    const proprietes = {
        duration: 5000,
        transitionDuration: 500,
        // infinite: true,
        // indicators: true,
        // arrows: true
    }

    return (
        
            <Slide {...proprietes} >
                <div className='each-slide'>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1758/1441758-h-e7a26f10353a" alt="first" />


                </div>
                <div className='each-slide'>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4292/754292-h" alt="second" />

                </div>
                <div className='each-slide'>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/66/1440066-h-2cb2c8d2f2ea" alt="third" />

                </div>
                <div className='each-slide'>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/530/530530-h" alt="fourth" />

                </div>

            </Slide>
        



    )
}

export default Body;