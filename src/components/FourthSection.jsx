import React from 'react';
import expTexOne from '../images/exp-t-1.webp';
import psOne from "../images/ps-1.webp";
import gsOne from "../images/gs1.webp";
import expTwo from "../images/exp-t-2.webp";
import psTwo from "../images/ps-2.webp";
import gsTwo from "../images/gs2.webp";


function FourthSection() {
  return (
    <div>
      {/* Fourth-setion */}
      <section className="fourth-section">
        <div className="container-fluid  text-center">
          <div className="text-sec text-center" />
          <h2 className="fw-bold">Some Features that Made Us Unique</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="icons-section text-center">
          <div className="row text-center icons-section-row">
            <div className="col-lg-4 col-md-6 content-box">
              <img src={expTexOne} alt="img" />
              <h3 className="pt-3">Expert Technicians</h3>          
            </div>
            <div className="col-lg-4 col-md-6 content-box">
              <img src={psOne} alt="img" />
              <h3 className="pt-3">Professinal Service</h3>
            </div>
            <div className="col-lg-4 col-md-6  content-box">
              <img src={gsOne} alt="img" />
              <h3 className="pt-3">Great Support</h3>
            </div>
          </div>
          <div className="row text-center icons-section-row">
            <div className="col-lg-4 col-md-6 content-box">
              <img src={expTwo} alt="img" />
              <h3 className="pt-3">Expert Technicians</h3>
            </div>
            <div className="col-lg-4 col-md-6 content-box">
              <img src={psTwo} alt="img" />
             {/* // ./images/ps-2.webp */}
              <h3 className="pt-3">Professinal Service</h3>
            </div>

            <div className="col-lg-4 col-md-6 content-box">
              <img src={gsTwo} alt="img" />
              <h3 className="pt-3">Great Support</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FourthSection
