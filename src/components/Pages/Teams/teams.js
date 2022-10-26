// import React, {Component} from "react";
// import React, {Component} from "react";
import team1 from '../../../assets/images/teams/team1.png';
import team2 from '../../../assets/images/teams/team2.png';
import React, { Component } from "react";
import Slider from "react-slick";

// const Overview = () => {
//   return(     
    
//   )
// }


export default class Teams extends React.Component {
  render() {
    var settings = {
      arrows: false,
      dots: true,  
      infinite: false,
      centerPadding: "10%",
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [{
        breakpoint:1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "0%",
          arrows: false,
          dots: true,   
        },
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "0%",
          arrows: false,
          dots: true, 
        }
      }]
    };
    return (
      <div className='container-fluid'>
      <div className="container">
          <div className="section-effect overview-sec">
          <div className='title-style pb-1 mb-0 text-center'>
            <h2>TEAM</h2>
        </div>
        {/* <div className='text-center title-sub-txt'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum leo eget ligula vestibulum, ac auctor tortor vulputate. 
        </div> */}
          <div className='row slider-section'>
            <div className='col-12'>
            <div className='inner-section'>
                  <div class="slider">
                      <div class="slide">
                        <div class="child-element">
                        <Slider {...settings}>
                          <div>
                           <div className='d-flex justify-content-between flex-lg-nowrap flex-wrap'>
                            <div className='mr-lg-5'>
                            <div className='img-circle'>
                              <img src={team1}  className="rounded-circle"/>
                            </div>
                            </div>                           
                            <div className='pr-lg-5'>
                              <div className='name mb-2'>@wcpfounder</div>
                              <div className='destination mb-3'>creative leader</div>
                              <div className='mb-3 desc'>Sports enthusiast and crypto native geek who loves to help others be a success in blockchain.</div>
                              <ul className='d-flex socials-icon'>
                                <li><a href='javascript:;'><i className="fa fa-twitter fa-1x mr-3"/></a></li>
                                <li><a href='javascript:;'><i className="fa fa-telegram fa-1x"/></a></li>
                              </ul>
                            </div>
                           </div>
                          </div>
                          <div>
                          <div className='d-flex flex-lg-nowrap flex-wrap'>
                            <div className='mr-lg-5'>
                            <div className='img-circle'>
                              <img src={team2}  className="img-fluid"/>
                            </div>
                            </div>
                            <div>
                              <div className='name mb-2'>@skylarkingcrypto</div>
                              <div className='destination mb-3'>product guy</div>
                              <div className='mb-3 desc'>Community lead across big projects. Passionate to start his own and make it long lasting.</div>
                              <ul className='d-flex socials-icon'>
                                <li><a href='javascript:;'><i className="fa fa-telegram fa-1x mr-3"/></a></li>
                              </ul>
                            </div>
                           </div>
                          </div>
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