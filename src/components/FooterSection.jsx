import React from 'react';

import fONe from "../images/f1.webp";
import fTwo from "../images/f2.webp";
import fThree from "../images/f3.webp";
import fFour from "../images/f4.webp";
import fFive from "../images/f5.webp";
import fSix from "../images/f6.webp";
import fSeven from "../images/f7.webp";
import fEight from "../images/f8.webp";
import twitterIcon from "../images/twitter.png";
import facebookIcon from "../images/facebook1.png";
import githubIcon from "../images/github1.png";
import linkedIcon from "../images/linkedin.png";

function FooterSection() {
  return (
    <div>
      {/* Footer tenth-section */}
      <footer className="footer-section tenth-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className>
                <h6 className="ms-5">All Products</h6>
                <ul className="footer-nav text-white">
                  <li><a className="text-white" href="#">Managed Website</a></li>
                  <li><a className="text-white" href="#">Manage Reputation</a></li>
                  <li><a className="text-white" href="#">Power Tools</a></li>
                  <li><a className="text-white" href="#">Marketing Service</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6  col-md-12">
              <div className>
                <h6>Top News</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi unde.</p>
                <div>
                  <div className="input-sec">
                    <form>
                      <div className="form-group row" style={{ width: '100%' }}>
                        <div className="col-lg-8 col-md-12">
                          <input className="tenth-sec-input rounded-pill" name="email" placeholder="EnterYour Email Address" type="email" />
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <button className="btn btn-primary rounded-pill px-5">Subscribe</button>
                        </div>
                      </div>
                    </form></div>
                  <div className="info" />
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-12">
              <div className>
                <h6 className="mb-20">Instagram Feed</h6>
                <ul className="d-flex flex-wrap footer-instagram-feed">
                  <div className="row">
                    <div className="col-3 ">
                      <li><img className="mb-1" src={fONe} alt="img" /></li>
                      <li><img src={fTwo} alt="img" /></li>
                    </div>
                    <div className="col-3  ">
                      <li><img className="mb-1" src={fThree} alt="img" /></li>
                      <li><img src={fFour} alt="img" /></li>
                    </div>
                    <div className="col-3 mx-">
                      <li><img className="mb-1" src={fFive} alt="img" /></li>
                      <li><img src={fSix} alt="img" /></li>
                    </div>
                    <div className="col-3 ">
                      <li><img className="mb-1" src={fSeven} alt="img" /></li>
                      <li><img src={fEight} alt="img" /></li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="row footer-bottom d-flex justify-content-between text-center">
            <div className="col-lg-8 col-sm-12 footer-text m-0 text-white pb-4">Copyright © 2022 All rights belongs to
              <strong>M Bilal</strong>
            </div>
            <div className="col-lg-4 col-sm-12 footer-social mb-4">
              <a className="nineth-sec-icons" href><img className="ms-3" src={githubIcon} alt="img" width="8%" /></a>
              <a className="nineth-sec-icons" href><img className="ms-3" src={twitterIcon} alt="img" width="8%" /></a>
              <a className="nineth-sec-icons" href><img className="ms-3" src={linkedIcon} alt="img" width="8%" /></a>
              <a className="nineth-sec-icons" href><img className="ms-3" src={facebookIcon} alt="img" width="8%" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FooterSection
