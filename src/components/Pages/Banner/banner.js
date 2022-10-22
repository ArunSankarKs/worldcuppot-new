import React, { useState } from 'react';
import $ from 'jquery';
import Slider from "react-slick";
import pot1 from '../../../assets/images/world-cup-pot-1.jpeg';
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
              <p>Collect soccer players NFTS then get $WCP airdrops if your players win in the daily simulation matches powered by Chainlink's VRF and our soccer simulator engine.</p>
              <p>You can also bet BUSD on each match. </p>
            </div>
          <div className="pt-4 launch-btn">
              <a href="javascript:;" className="btn btn-outline lp-btn primary-btn mr-3">
              Buy packs
              </a>
              <a href="javascript:;" className="btn btn-outline lp-btn secondary-btn">
              Buy $WCP
              </a>
          </div>
        </div> 
        </div>
        <div className='col-md-6'>
        <div className='carousal-wrap'>
        <OwlCarousel {...settings}>  
           <div className='img-wrap'><img  className="img" src= {pot1}/></div>
           <div className='img-wrap'><img  className="img" src= {pot2}/></div>  
           <div className='img-wrap'><img  className="img" src= {pot1}/></div>  
           <div className='img-wrap'><img  className="img" src= {pot2}/></div>  
           <div className='img-wrap'><img  className="img" src= {pot1}/></div>
         </OwlCarousel> 

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
