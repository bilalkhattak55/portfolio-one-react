import React from 'react';
import mobileHand from "../images/mobile.png";

function FirstSetion() {
  return (
    <div>
        {/* first section */}
        <section className="first-section">
        <div className="container-fluid section-01-container bg-primary">
          <div className="row">
            <div className="col-12 col-md-6 justify-content-center justify-content-end first-sec-items ">
              <div className="first-sec-column-items">
                <h1 className>The Best App in the Universe</h1>
                <p style={{ fontSize: '0.8rem', color: '#fff' }} className="fz-6">Lorem ipsum dolor sit, amet consectetur
                  adipisicing
                  elit. Voluptate eum ducimus eaque.</p>
                <p style={{ fontSize: '0.8rem', color: '#fff' }}>Lorem ipsum dolor sit amet consectetur elit. Odio,
                  ipsam!</p>
                <button style={{ fontSize: '0.8rem' }} className="btn btn-load-more rounded-pill fw-bold px-5 py-2">LOAD MORE
                  ITEM</button>
              </div>
            </div>
            <div className="col-12 col-md-6 first-sec-items ">
              <div className="mobile-image">
                <img width="200px" src={mobileHand} alt="mobile picture" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FirstSetion
