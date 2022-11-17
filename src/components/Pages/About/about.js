import React from 'react';
import game12 from '../../../assets/images/game12.jpg';
import blinkimg from '../../../assets/images/blink-img.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import $ from 'jquery';
const About = () => {

  return(    
    
    <div className="container-fluid px-0">
  <div className="container">
          <div className="section-effect">
          {/* <div className='title-style title-style-sm pb-1 mb-4'>
            <h2>SOCCER MATCHES</h2>
        </div> */}
        <div className='row justify-content-around'>
          <div className='col-md-8 pr-lg-0'>
            <div className='text-center about-intro mb-4'>Earn $WCP by betting on matches or owning NFT players!</div>
          
          <div className='d-flex flex-wrap justify-content-between'>
          <a href='https://dapp.worldcuppot.io/' className='abt-card-link'>
            <div className='card about-card left-card d-flex justify-content-lg-end justify-content-center p-4 flex-wrap'>
               <div className='card-bottom-txt'>
                  Bet on World Cup 2022 matches
                </div>
            </div>
            </a>
            <div className='card about-card right-card d-flex justify-content-lg-end justify-content-center p-4 flex-wrap'>
              <div className='text-center'>
               <div className='card-bottom-txt'>
                   Chainlink VRF Matches
                   <div className='coming-soon-txt-sm'>(Coming Soon)</div>
                </div>
               
                </div>
            </div>
          </div>
         
        </div>
        </div>
        <div className='row justify-content-around mt-4'>
        <div className='col-md-8'>
            <div className='card bottom-card left-card d-flex justify-content-end p-4'>
            <div className='card-bottom-txt'>
                Browse NFT team and players
                  <div className='coming-soon-txt-sm'>(Coming Soon)</div>
              </div>
          </div>        
        </div>
        </div>
        {/* <div className="row align-items-center">       
        <div className="col-lg-12 mt-lg-0 pt-lg-0">
        <Tabs defaultActiveKey="game12"  id="tab-example"  className="mb-3" >
      <Tab eventKey="game12" title={
        <React.Fragment>
          Game 12 
          <span className='ml-3'>starts in 4h: 30m: 3s</span>
        </React.Fragment>
       }>
        <div className='black-wrapper'>
        <div className="text-right d-flex justify-content-center pt-5 pb-5 px-lg-5">
          <img src={game12}  className="img-fluid"/>
        </div>
          <div className='text-animation-wrap'>
            <p>Card 975 from team A in Inside left Runs Around the ball</p>
            <p>Card 975 from team A in Outside right Runs Around the ball</p>          
            <p>LCard 975 from team A in Center half back Fights to Card 754</p>
            <p>LCard 975 from team A in Center half back Injures to Card 432</p>          
          </div>
          <div className='title-style title-style-sm pb-0 mb-0 text-center mt-5'>
            <h2>POT: $40 USDT</h2>
        </div>
        <div className='text-center match-txt mb-4'>MATCH STARTS on 7:30:12</div>
          <div className='table-responsive betting-table px-5 mb-5'>
          <table class="table table-hover table-dark table-lg">
            <thead>
              <tr>
                <th scope="col">TEAM BULL: $160</th>
                <th scope="col" className='text-center'>TEAM BEAR: $180</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$20: 0x41sadfa..3414121</td>
                <td className='text-center'>$20: 0x41sadfa..3414121</td>
              </tr>
              <tr>
                <td scope="row">$10: 0xsa23adfa..35sdfv</td>
                <td className='text-center'>$10: 0xsa23adfa..35sdfv</td>
              </tr>
              <tr>
                <td scope="row">$20: 0x41sadfa..3414121</td>
                <td className='text-center'>$20: 0x41sadfa..3414121</td>
              </tr>
              <tr>
                <td scope="row">$10: 0xsa23adfa..35sdfv</td>
                <td className='text-center'>$10: 0xsa23adfa..35sdfv</td>
              </tr>
              <tr>
                <td scope="row">$20: 0x41sadfa..3414121</td>
                <td className='text-center'>$20: 0x41sadfa..3414121</td>
              </tr>
              <tr>
                <td scope="row">$10: 0xsa23adfa..35sdfv</td>
                <td className='text-center'>$10: 0xsa23adfa..35sdfv</td>
              </tr>
              <tr>
                <td scope="row">$20: 0x41sadfa..3414121</td>
                <td className='text-center'>$20: 0x41sadfa..3414121</td>
              </tr>
              <tr>
                <td scope="row">$10: 0xsa23adfa..35sdfv</td>
                <td className='text-center'>$10: 0xsa23adfa..35sdfv</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className='text-center'>
            <button className='place-btn'>PLACE YOUR BET!</button>
          </div>
        </div>
      </Tab>

      <Tab eventKey="game11" title="Game 11">
      Game 11
      </Tab>
      <Tab eventKey="game10" title="Game 10">
       Game 10
      </Tab>
      <Tab eventKey="game9" title="Game 9">
        Game 9
      </Tab>
      <Tab eventKey="game8" title="Game 8">
      Game 8
      </Tab>
    </Tabs>
      </div> 
      </div>   */}
    </div>
        
      </div>   

</div>
  )
}

export default About;
