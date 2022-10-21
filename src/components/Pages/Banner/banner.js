import React, { useState } from 'react';
import $ from 'jquery';
import Slider from "react-slick";

import team1 from '../../../assets/images/teams/team1.png';
import team2 from '../../../assets/images/teams/team2.png';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

// $(document).ready(function(){
//   var $owl = $('.owl-carousel');

//   $owl.children().each( function( index ) {
//     $(this).attr( 'data-position', index ); 
//   });
  
//   $owl.owlCarousel({
//     center: true,
//     loop: true,
//     items: 5,
//   });
  
//   $(document).on('click', '.owl-item>div', function() {
//     var $speed = 300;  // in ms
//     $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
//   });
// });

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
  

  var sliderImage = [
    {sliderimg:team1},
    {sliderimg:team2},
    {sliderimg:team1},
    {sliderimg:team2},
    
   
  ]

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
           <div className='img-wrap'><img  className="img" src= {'https://via.placeholder.com/400x300/f06/fff/?text=1'}/></div>  
           <div className='img-wrap'><img  className="img" src= {'https://via.placeholder.com/400x300/f63/fff/?text=2'}/></div>  
           <div className='img-wrap'><img  className="img" src= {'https://via.placeholder.com/400x300/fc3/fff/?text=3'}/></div>  
           <div className='img-wrap'><img  className="img" src= {'https://via.placeholder.com/400x300/f06/fff/?text=4'}/></div>  
           <div className='img-wrap'><img  className="img" src= {'https://via.placeholder.com/400x300/f63/fff/?text=5'}/></div>  
      </OwlCarousel>  

        {/* <Slider {...settings}>        
            {sliderImage.map(item => (
            <div><img src={item.sliderimg}/> </div>
            ))}
          </Slider> */}

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
        
        {/* <div className='w-100'>
    <div class="bulb-holder">
        <div class="bulb">
            <div class="light"></div>
        </div>
    </div>

    <div class="bulb-holder" id="b1">
        <div class="bulb">
            <div class="light"></div>
        </div>
    </div>
    <div class="bulb-holder" id="b2">
        <div class="bulb">
            <div class="light"></div>
        </div>
    </div>
    </div> */}
    </div>

 
    {/* <div className='anim-wrapper'> 
          <div class="fish_wrap">
                <div class="fred">
                    <div class="top_fin"></div>
                    <div class="tail_fin"></div>
                    <div class="fish_body">
                        <div class="eye"></div>
                        <div class="scale_1"></div>
                        <div class="scale_2"></div>
                        <div class="scale_3"></div>
                        <div class="scale_4"></div>
                    </div>                                        
                </div>
            </div>
            <div className='drop-wrapper'>
            <div class="drop"></div>
            <div class="pool"></div>

            <div class="drop2"></div>
            <div class="pool2"></div>
            </div>
          
            
   </div>  */}
  </div> 

 
  )
}

export default Banner;
