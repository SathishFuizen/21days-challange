import React from 'react'
import { Slide } from "react-slideshow-image"
import "./Slides.css"
import 'react-slideshow-image/dist/styles.css'

const SubSlides = () => {
    const proprietes = {
        duration: 5000,
        transitionDuration: 500,
        // infinite: true,
        // indicators: true,
        // arrows: true
    }
    return (
        <>
            <div className='title'>StarPlusShows</div>
            <div className='main-container'>
           
                <Slide {...proprietes}>
                    <div className='slide-image'>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1991/311991-h" alt="first"></img>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/152/152/152-v" alt="second"></img>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2028/552028-v" alt="three"></img>
                        {/* <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4327/734327-v" alt="four"></img> */}
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5448/515448-v" alt="five"></img>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/11/11/11-v" alt="six"></img>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6842/336842-v" alt="seven"></img>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/81/81/81-v" alt="eight"></img>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1996/861996-v" alt="nine"></img>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2023/552023-v" alt="ten"></img>
                      
                      
                        
                    </div>
                   
                 
                </Slide>
                </div>
            
        </>
    )
}

export default SubSlides;