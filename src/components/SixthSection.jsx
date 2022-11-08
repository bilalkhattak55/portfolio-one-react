import React from 'react';

import carouselOneImg from "../images/car1.webp";
import carouoselTwoImg from "../images/car2.webp";
import carouselThreeImg from "../images/car3.webp";

function SixthSection() {
  return (
    <div>
      {/* Sixth section */}
      <section className="sixth-section">
        <div className="container-fluid">
          <div className="heading text-center pb-5 px-5">
            <h2 className="pb-2 fw-bold">Some Features That Made Us Unique</h2>
            <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="cards-section text-center">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval={2000}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carouselOneImg} className="d-inline-block w-30" alt="img" />
                <img src={carouoselTwoImg} className="d-inline-block w-30" alt="img" />
                <img src={carouselThreeImg} className="d-inline-block w-30" alt="img" />
              </div>
              <div className="carousel-item">
                <img src={carouselOneImg} className="d-inline-block w-30" alt="img" />
                <img src={carouoselTwoImg} className="d-inline-block w-30" alt="img" />
                <img src={carouselThreeImg} className="d-inline-block w-30" alt="img" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SixthSection
