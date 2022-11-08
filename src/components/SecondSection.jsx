import React from 'react';
import HEXA from "../images/hexagon.png";

function SecondSection() {
  return (
    <div>
         {/* second section */}
         <section className="second-section">
        <div className="heading text-center pt-5 px-5">
          <h2 className="pb-2 fw-bold">Latest News from All Categories</h2>
          <p className="px-5 second-sec-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            laboriosam vero
            repellendus temporibus nihil eaque.</p>
        </div>
        <div id='icon-section-id' className="icon-sec d-flex">
          <div className="row justify-content-center">
            <div className="icons col-lg-4 col-md-4">
              <div className="icon">
              <ion-icon className="icon pb-3" name="color-wand-outline" />
              </div>
              <img className="hexagon" width="90px" src={HEXA} alt="" />
             
              <div className="second-sec-items">
                <h5 className="fw-bold pb-2">Maintenance</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt architecto ipsum quos, harum
                  ad
                  sequi
                  assumenda enim sapiente aliquam vero ab!</p>
              </div>
            </div>
            <div className="icons col-lg-4 col-md-4">
              <div className="icon">
              <ion-icon className="icon rocket-icon pb-3" name="rocket-outline" />
              </div>
              <img className="hexagon" width="90px" src={HEXA} alt="" />
              <div className="second-sec-items">
                <h5 className="fw-bold pb-2">Residencial Service</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt architecto ipsum quos, harum
                  ad
                  sequi
                  assumenda enim sapiente aliquam vero ab!</p>
              </div>
            </div>
            <div className="icons col-lg-4 col-md-4">
              
              <div className="icon">
              <ion-icon className="icon pb-3" name="bug-outline" />
              {/* <ion-icon className="icon pb-3" name="bug-outline" /> */}
              </div>
              <img className="hexagon" width="90px" src={HEXA} alt="" />
              <div className="second-sec-items">
                <h5 className="fw-bold pb-2">Commercial Service</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt architecto ipsum quos, harum
                  ad
                  sequi
                  assumenda enim sapiente aliquam vero ab!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecondSection;
