// import React, {Component} from "react";
import sliderImg from '../../../assets/images/slider-1.png';
import React, { Component } from "react";
import Slider from "react-slick";



// const Overview = () => {
//   return(     
    
//   )
// }

export default class Partner extends React.Component {
  render() {
    const settings = {
      slidesToShow: 4,
      centerMode: false,
      centerPadding: "10px",
      speed: 500,
      arrows: true,
      dots: false,       
      responsive: [{
        breakpoint:1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "0%",
          arrows: true,
          dots: false,   
        },
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "0%",
          arrows: true,
          dots: false, 
        }
      }]
    };

    var sliderImage = [
      {sliderimg:sliderImg},
      {sliderimg:sliderImg},
      {sliderimg:sliderImg},
      {sliderimg:sliderImg},
      {sliderimg:sliderImg},
      {sliderimg:sliderImg},
      {sliderimg:sliderImg},
      {sliderimg:sliderImg}
    ]
    return (
      <div className='container-fluid'>
      <div className="container">
          <div className="section-effect overview-sec">
          <div className='title-style pb-1  text-center'>
            <h2>TECH PARTNERS</h2>
        </div>
          <div className='row slider-section'>
            <div className='col-12'>
            <div className='inner-section'>
                  <div class="slider">
                      <div class="slide">
                        <div class="child-element">
                        <Slider {...settings}>
                          <div className='partners'>Uniswap</div>
                          <div className='partners'>Opensea</div>
                          <div className='partners'>Chainlink</div>
                          <div className='partners'>Coingecko</div>
                        </Slider>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
     </div> 
    </div>
      </div>
     </div>
    );
  }
}
