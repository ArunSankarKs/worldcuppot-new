// import React, {Component} from "react";
import sliderImg from '../../../assets/images/slider-1.png';
import React, { Component } from "react";
import Slider from "react-slick";

import PropTypes from "prop-types";

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
                          <div className='partners'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chainlink_Logo_Blue.svg/1024px-Chainlink_Logo_Blue.svg.png?20210226190931" style={{width:"300px"}}/></div>
                          <div className='partners'><img src="https://dotmoovs.com/static/c202c7260f7a5af51d123da7207aba8d/b43f4/coinmarket.png" style={{width:"300px",paddingTop:"20px",paddingLeft:"20px"}}/></div>
                          <div className='partners'><img src="https://etherscan.io/images/brandassets/etherscan-logo-light.png" style={{width:"250px",paddingTop:"20px",paddingLeft:"20px"}}/></div>
                          <div className='partners'><img src="https://landing.coingecko.com/wp-content/uploads/2020/04/logo-1024x320.png" style={{width:"300px"}}/></div>
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
