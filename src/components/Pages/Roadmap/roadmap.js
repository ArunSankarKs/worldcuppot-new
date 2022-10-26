import React from 'react';

const Roadmap = () => {
    (function () {
        "use strict";
        var items = document.querySelectorAll(".timeline li");

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
    })();

    return (
  <div className="container-fluid px-0">
  <div class="timeline2">
      <div className='title-style text-center pb-1 mb-0'>
          <h2>ROADMAP</h2>
      </div>
      <div className='text-center title-sub-txt mb-4'>
      Long term and commited to building a powerful NFT powered platform for World Cup fans until the next one in 2026!
    </div>
    <div className='roadmap'>
    <div className='container'>     
      <div class="timeline pt-4 px-4">
<div1 class="circle-container">
<section class="tl no-border"></section>
<section class="tr no-border"></section>
<div class="flex">
  <span class="circle">2022</span>
</div>
<section class="bl"></section>
<section class="br"></section>
</div1>
<section class="info no-border">
<h2></h2>
<ul className='list'>
    <li>Fair Launch</li>
    <li>1st NFT collection</li>
    <li>AI Matches v1</li>
    <li>Betting contracts</li>
</ul>
</section>
<section></section>

<section></section>
<section class="info">
<h2></h2>
<ul className='list-2'>
    <li>Countries collection</li>
    <li>AI Matches v2</li>
    <li>NFT Marketplace</li>
    <li>Betting contracts 2.0</li>
</ul>
</section>
<div1 class="circle-container">
<section class="tl"></section>
<section class="tr"></section>
<div class="flex">
  <span class="circle">2023</span>
</div>
<section class="bl"></section>
<section class="br"></section>
</div1>
<div1 class="circle-container">
<section class="tl"></section>
<section class="tr"></section>
<div class="flex">
  <span class="circle">2024</span>
</div>
<section class="bl"></section>
<section class="br"></section>
</div1>
<section class="info">
<h2></h2>
<ul className='list'>
    <li>Create Teams</li>
    <li>Custom Matches</li>
    <li>Visual game v1</li>
    <li>Virtual commentators</li>
</ul>
</section>
<section></section>


<section></section>
<section class="info">
<h2></h2>
<ul className='list-2'>
    <li>Tourneys with $ prizes</li>
    <li>AI Matches v3</li>
    <li>Visual games v2</li>
    <li>NFT proteges</li>
</ul>
</section>
<div1 class="circle-container">
<section class="tl"></section>
<section class="tr"></section>
<div class="flex">
  <span class="circle">2025</span>
</div>
<section class="bl no-border"></section>
<section class="br no-border"></section>
</div1>
    </div>
    </div>
    </div>
</div>
 </div>
    )
}

export default Roadmap;
