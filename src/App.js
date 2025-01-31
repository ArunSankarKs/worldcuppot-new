import React , { useState, useEffect } from 'react';
import './App.scss';
import Banner from './components/Pages/Banner/banner';
import Partner from './components/Pages/Partner/partner';
import Roadmap from './components/Pages/Roadmap/roadmap'
import About from './components/Pages/About/about';
import Teams from './components/Pages/Teams/teams';
import Faq from './components/Pages/FAQ/faq';
import logo from './assets/images/logo.png';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery/dist/jquery.js';
import 'owl.carousel/dist/owl.carousel.min.js';

// import Footer from './components/Pages/Footer/Footer';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => { 

  const [scrollingLock, setScrollingLock] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  })

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollingLock(true);
    } else if (window.scrollY < 0) {
      setScrollingLock(false);
    }
  }
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 

      // var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      //   target: '.navbar-nav',
      //   offset: 200
      // })

    });
  }); 
  (function() {
  
    function initOnLoad() {
      console.log('Dom loaded');
    };
    
    window.addEventListener('load', initOnLoad);
  })();

  const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; 
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });

if ('IntersectionObserver' in window)  {  
    // Recommended: make this selector more specific with a `data-animate-on-visible` 
    let elements = document.querySelectorAll("svg");  
    let observer = new IntersectionObserver(entries => {    
         // quit early if users wants Reduced Motion    
        let mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');    
        if(!mediaQuery.matches) {      
            return;    
        }    
        for(let entry of entries) {      
            if(!entry.isIntersecting) {        
                continue;      
            }      
            // Look for <animate> or <animateTransform> that need JS to start      
            let beginElements = entry.target.querySelectorAll(`:scope [begin="indefinite"]`);      
            for(let beginEl of beginElements) {        
                beginEl.beginElement();        
                // Unobserve so we don’t re-animate the dead        
                // observer.unobserve(entry.target);      
            }    
        }  
    },  
    {    threshold: .5 
        // 50% of element must be visible  
    });  
    for(let elem of elements) {    
        // console.log(elem);
        observer.observe(elem);  
    }
}
  
  return (
<div>
<div>
       <nav className="navbar navbar-expand-lg navbar-inverse navbar-fixed-top w-100 justify-content-center" id="navbar_top" style={{position: scrollingLock ? "fixed" : "fixed"}}>
          <div className="container">
          <a className="navbar-brand" href="#">
          <img src={logo} className="img-fluid"/>
         {/* WORLD CUP POT */}
          </a>
          <div className="navbar-header">
              {/* <a className="navbar-brand d-lg-none" href="#"> </a>      */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span class="close"></span>
              </button>
          </div>
        <div className="collapse navbar-collapse" id="navbarToggle">
         

          <ul className="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="https://dapp.worldcuppot.io" target = "_blank" className="lp-btn btn lp-btn-sm primary-btn">
              Launch Dapp
              </a> 
            </li>
             <li className="nav-item">
              <a className="nav-link"  href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roadmap">ROADMAP</a>
            </li>         
           
            <li className="nav-item">
              <a className="nav-link" href="#team">TEAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
            {/*<li className="nav-item">*/}
            {/*<a href="javascript:;" className="btn lp-btn lp-btn-sm primary-btn">*/}

            {/*  </a>*/}
            {/*</li>*/}

           
          </ul>
        </div>
        </div>
      </nav>  
      </div>
   
    
    <div class="container-fluid px-0">
    <section id="home" className="position-relative p-0 m-0">
    <Banner></Banner>
    </section>
    <section id="about" className="position-relative">
    <div class='bg-image remove-border'>
         <div className='inner-section remove-border'>
          <About></About>
          </div>
          </div>
      </section> 
      
      <section id="partner" className="position-relative">
        <div className='inner-section pb-0'>
          <Partner></Partner>
          </div>
      </section>  
      <section id="team" className="position-relative">
      <div class='bg-image'>
      <div className='inner-section'>
           <Teams></Teams> 
        </div>
        </div>
      </section> 
      <section id="roadmap" className="position-relative">
        <div class='bg-image'>
      <div className='inner-section'>  
          <Roadmap></Roadmap>
          </div>
          </div>   
      </section>      
      <section id="faq" className="position-relative">
      <div class='bg-image'>
          <div className='inner-section'>
          <Faq></Faq> 
          </div>
          </div>
      </section> 
    </div>


    <footer>
            <div class="footer-top footer-bg">
                <div class="container custom-container">
                    <div class="row justify-content-center justify-content-md-between">
                        <div class="col-lg-5 col-md-5">
                            <div class="footer-widget mb-4">
                                <div class="mb-3 pt-4">
                                   <h1 className='footer-logo-txt mb-4'>WORLD CUP POT</h1>
                                </div>
                                <div class="fw-text">
                                    <p>World Cup Pot is a decentralized football simulator powered by NFTs and a game simulator. </p>
                                  </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-5">
                            <div class="footer-widget mb-4 mb-lg-0 d-flex flex-column justify-content-center justify-content-md-end">
                                <div class="fw-title mb-lg-4 mb-3">
                                    <h3>Socials</h3>
                                </div>
                                <div class="fw-quick-link">
                                    <ul>
                                    <li className="nav-item">
                                      <a className="nav-link" href="https://t.me/worldcuppot">Telegram</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="https://twitter.com/worldcuppot">Twitter</a>
                                    </li>
                                    {/* <li class="nav-item">
                                      <a className="nav-link" href="javascript:;">Youtube</a>
                                    </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-5">
                            <div class="footer-widget mb-4 mb-lg-0 d-flex flex-column justify-content-center justify-content-md-end">
                                <div class="fw-title mb-3 mb-lg-4">
                                    <h3>Blockchain</h3>
                                </div>
                                <div class="fw-quick-link">
                                    <ul>
                                    <li className="nav-item">
                                      <a className="nav-link" href="https://coinmarketcap.com/currencies/world-cup-pot/" target="_blank">CoinMarketCap</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="https://www.geckoterminal.com/eth/pools/0xff06393c6c42409a73ae0e5d4e2e2e9b4016c814" target="_blank">CoinGecko</a>
                                    </li>
                                    <li class="nav-item">
                                      <a className="nav-link" href="Coming Soon:;">Opensea</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="https://etherscan.io/token/0xda754d0b8e7a4a5597e3f3c09593e1621dc9f6d1" target="_blank">EtherScan</a>
                                    </li>
                                    <li class="nav-item">
                                      <a className="nav-link" href="https://app.uniswap.org/#/swap?outputCurrency=0xda754d0b8e7a4a5597e3f3c09593e1621dc9f6d1" target="_blank">Uniswap</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-5">
                            <div class="footer-widget mb-4 mb-lg-0d-flex flex-column justify-content-center justify-content-md-end">
                                <div class="fw-title mb-3 mb-lg-4">
                                    <h3>Useful Links</h3>
                                </div>
                                <div class="fw-quick-link">
                                    <ul>
                                    <li className="nav-item">
                                      <a className="nav-link" href="https://etherscan.io/token/0xda754d0b8e7a4a5597e3f3c09593e1621dc9f6d1" target="_blank">Contract</a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link" href="Coming Soon:;">Pitch Deck</a>
                                    </li>
                                    <li class="nav-item">
                                      <a className="nav-link" href="worldcuppot@gmail.com" target="_blank">Contact</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="copyright-wrap third-copyright-wrap">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="copyright-text">
                                <p>Copyright © 2022 <a href="#">WORLD CUP POT</a> All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 d-none d-md-block">
                            
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>   
  </div>
  );
}

export default App;
