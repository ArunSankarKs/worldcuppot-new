// import React, {Component} from "react";

import React, { Component } from "react";
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';


export default class Faq extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
      <div className="section-effect">
          <div className="pb-5 mb-1">
               
	<div class="tokenomic-wrap">
		<div class="container">    
        <div class="">          
        <div class="row align-items-center">
				<div class="col-md-6">
        <div className='title-style mb-4'>
            <h2>FAQ</h2>
        </div>
         <div className="pr-lg-5">Frequently asked questions to get to know more about World Cup Pot. Tag us on Twitter if you have any specific questions!</div>
					</div>
           <div class="col-md-6">
            <div className='mt-lg-0 mt-5'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is World Cup Pot?</Accordion.Header>
                  <Accordion.Body>
                  WCP is a platform to simulate the feeling of a World Cup season every day of every year with NFTs and a dapp. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What does the WCP token do?</Accordion.Header>
                  <Accordion.Body>
                  WCP is an ERC20 token that incentivizes adoption and participation as well as a key component in staking, fees and other functions to be built. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>What are the WCP NFTs?</Accordion.Header>
                  <Accordion.Body>
                  Our NFTs are different because they are used in AI matches and can affect the results. Winning matches will earn the NFT owners tokens and stat upgrades. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>How do Matches and beting work?</Accordion.Header>
                  <Accordion.Body>
                  Matches are primarily driven by a Verifiable Random Function and the NFT player’s stats. The engine will evolve over time to reflect a real and exciting match on the field.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
