import React from 'react'
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
import "./Slide2.css"

const Slide2 = () => {
    const properties={
        duration: 5000,
        transitionDuration: 500,

    }
  return (
    <div>
        <div className='title1'>Popualr Action Movies</div>
        <Slide {...properties}>
            <div className='silde-image1'>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9239/1389239-v-b354c74533f6" alt="first"></img>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v" alt="sceond"></img>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6241/1296241-v-757c5ceacbfa" alt="third"></img>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5085/635085-v" alt="four"></img>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6636/1056636-v-b2e830e9e71f" alt="five"></img>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v" alt="six"></img>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7639/1307639-v-e58374d4d501" alt="seven"></img>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/5483/1770015483/1770015483-v" alt="eight"></img>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5466/1115466-v-6c7716c884a1" alt="nine"></img>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6636/1056636-v-b2e830e9e71f" alt="ten"></img>
            </div>


        </Slide>
    </div>
  )
}

export default Slide2