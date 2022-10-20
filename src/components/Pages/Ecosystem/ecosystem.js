import React from 'react';
import game12 from '../../../assets/images/game12.png';
import blinkimg from '../../../assets/images/blink-img.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import $ from 'jquery';
const Ecosystem = () => {

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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi rutrum leo eget ligula</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi rutrum leo eget ligula</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
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

export default Ecosystem;
