import React from 'react';

function NinethSecion() {
  return (
    <div>
      
      {/* Nineth section  */}
      <section id="nineth-section" className>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center text-white mb-5 ">Download This App Today!</h1>
              <p className="text-center text-white fs-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rerum, fuga. Exercitationem, corporis! Corrupti, nam repellat, error facilis, omnis sapiente
                soluta iure enim ipsum minima reiciendis!</p>
            </div>
          </div>
          <div className="d-flex justify-content-center text-center row mt-5 ">
            <div className="col-lg-6 new-btn ninth-sec-available nineth-left">
              <div className="complete-avilable-btn position-adjust-left">
                <a href="#" className="text-uppercase text-decoration-none text-dark">
                  <div className="available-sec">
                    <div className="app-store-icon">
                    <ion-icon style={{ float: 'left',fontSize:"40px",}} className="app-store-icon pe-3" name="logo-apple" />
                    </div>
                    <span className="available"> Available</span>
                  </div>
                  <p className="fw-bolder" style={{ fontSize: '0.7rem', color: 'grey' }}>On App Store</p>
                </a>
              </div>
            </div>
            <div className="col-lg-6 new-btn ninth-sec-available nineth-right">
              <div className="complete-avilable-btn position-adjust-right">
                <a href="#" className="text-uppercase text-decoration-none text-dark">
                  <div className="available-sec">
                  <div className="app-store-icon">
                    <ion-icon style={{ float: 'left' }} className="app-store-icon pe-3" name="logo-apple" />
                    </div>
                    <span className="available"> Available</span>
                  </div>
                  <p className="fw-bolder" style={{ fontSize: '0.7rem', color: 'grey' }}>On App Store</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NinethSecion
