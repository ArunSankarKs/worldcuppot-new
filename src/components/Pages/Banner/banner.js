import React, { useState } from 'react';
import $ from 'jquery';
import Slider from "react-slick";
import cardimg from '../../../assets/images/card-img.png';
import pot2 from '../../../assets/images/world-cup-pot-2.jpeg';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = props => {

  var settings = {
    className:"owl-theme" , 
    loop:"true",
    nav:false,
    center:"true",
    margin:-40,
    items:5,
    mouseDrag:true,
    touchDrag:true,    
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin:0,
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  }
  

  return(
  <div className="banner pb-5">
    <div className="container">
        <div className='row align-items-center'>
            <div className='col-md-6'>
        <div className='banner-txt'>
           <div className="mt-4 welcome-txt">   
                 WELCOME TO
            </div>
            <div className='title-txt'>
               WORLD CUP POT
            </div>
            <div>
              <p>WORLD CUP POT is for all the soccer loving degens out there!</p>
              <p>Collect soccer players NFTS then get $WCP airdrops if your players win in the daily simulation matches powered by Chainlink’s VRF and our soccer simulator engine.</p>
              <p>You can also bet USDT on each match. </p>
            </div>
          <div className="pt-4 launch-btn">
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0xda754d0b8e7a4a5597e3f3c09593e1621dc9f6d1" target = "_blank"className="btn btn-outline lp-btn primary-btn mr-3">
              Buy $WCP
              </a>
              <a href="https://app.valhalla.tools/token?address=0xff06393c6c42409a73ae0e5d4e2e2e9b4016c814&chain=1" target="_blank" className="btn btn-outline lp-btn secondary-btn">
              $WCP Chart
              </a>
          </div>
        </div> 
        </div>
        <div className='col-md-6'>
        <div className='carousal-wrap d-flex justi-content-center'>
          <div>
            <img src={cardimg} className="img-fluid"/>
          </div>
        {/* <OwlCarousel {...settings}>  
           <div className='img-wrap'><img  className="img" src= {pot1}/></div>
           <div className='img-wrap'><img  className="img" src= {pot2}/></div>  
           <div className='img-wrap'><img  className="img" src= {pot1}/></div>  
           <div className='img-wrap'><img  className="img" src= {pot2}/></div>  
           <div className='img-wrap'><img  className="img" src= {pot1}/></div>
         </OwlCarousel>  */}

      </div>
        </div>
</div>

        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
  </div> 

 
  )
}

export default Banner;
