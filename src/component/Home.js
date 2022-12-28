import React from 'react';
import Slider1 from "./pic1.png"
import Pic from "./pic2.png"

export default function Home() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
      <div className="slide1">
          <img src={Slider1} className="slide" alt="..."/>
          {/* <div id='p'> <p>carving future</p>
          <p>technology professionals</p>
          <p>out of young minds</p></div>
          */}
      </div>
      <div>
        <div id='text1'>
          <h3>WHO WE ARE</h3>
          <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
            <br/><br/>
            React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.
          </p>
        </div>
        <div className='slide1'>
        <img src={Pic} className="slide" alt="..."/>
        </div>
      </div>
    </div>   
);
}
