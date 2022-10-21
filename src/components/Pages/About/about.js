import React from 'react';
import game12 from '../../../assets/images/game12.png';
import blinkimg from '../../../assets/images/blink-img.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import $ from 'jquery';
const About = () => {

  return(    
    
    <div className="container-fluid px-0">
  <div className="container">
          <div className="section-effect">
          <div className='title-style title-style-sm pb-1 mb-4'>
            <h2>SOCCER MATCHES</h2>
        </div>
        <div className="row align-items-center">       
        <div className="col-lg-12 mt-lg-0 pt-lg-0">
        <Tabs defaultActiveKey="game12"  id="tab-example"  className="mb-3" >
      <Tab eventKey="game12" title={
        <React.Fragment>
          Game 12 
          <span className='ml-3'>starts in 4h: 30m: 3s</span>
        </React.Fragment>
       }>
        <div className='black-wrapper'>
        <div className="text-right d-flex justify-content-center pt-5 pb-5">
          <img src={game12}  className="img-fluid"/>
        </div>
          <div className="text-right d-flex justify-content-center mt-5">
          <img src={blinkimg}  className="img-fluid"/>
          </div>
          <div className='text-animation-wrap'>
            <p>Card 975 from team A in Inside left Runs Around the ball</p>
            <p>Card 975 from team A in Outside right Runs Around the ball</p>          
            <p>LCard 975 from team A in Center half back Fights to Card 754</p>
            <p>LCard 975 from team A in Center half back Injures to Card 432</p>          
          </div>
          <div className='title-style title-style-sm pb-1 mb-4 text-center mt-5'>
            <h2>BETTING STATS: $550 BUSD</h2>
        </div>
          <div className='table-responsive betting-table px-5 mb-5'>
          <table class="table table-hover table-dark table-lg">
            <thead>
              <tr>
                <th scope="col">TEAM BULL: $320</th>
                <th scope="col" className='text-center'>TEAM BEAR: $230</th>
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
      {/* <div className="col-lg-6">
          <div className="third-about-img text-right d-flex justify-content-center justify-content-lg-end pb-5">
             <img src={OctofeatherImage} data-inviewport="slide-up-particle" className="img-fluid rounded-circle" alt="Cinque Terre" width="500" height="500"/>
          </div>
        </div> */}
      </div>  
    </div>
        
      </div>   

</div>
  )
}

export default About;
