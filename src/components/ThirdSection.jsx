import React from 'react';
import ScreenshootOne from "../images/Screenshoot-1.png";
import screenshootTwo from "../images/Screenshoot-2.png";

function ThirdSection() {
  return (
    <div>
       {/*third section */}
       <section>
        <div className="container-fluid third-section">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center third-sec-items">
              <h4 className="fw-bold">we believe the interior beauties of total arcthitecture.</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloremque labore consequuntur,
                ex animi accusantium voluptate, quibusdam sapiente, rem obcaecati similique. Recusandae soluta
                sunt distinctio magnam commodi dolorum expedita dolore nemo veniam, quis nulla voluptatibus
                asperiores, autem accusantium amet blanditiis ex minima molestias id. Consectetur officia
                voluptatibus ab odio commodi.</p>
              <button className="btn btn-primary rounded-pill fw-bold">See Details </button>
            </div>
            <div className="col-12 col-md-12 col-lg-6 d-flex flex-row justify-content-center third-sec-img">
              <img className="me-5 screen-shoot" width="250px" height="430px" src={ScreenshootOne} alt="screenShoot"  />
              <img className="screen-shoot" width="250px" height="430px" src={screenshootTwo} alt="screenShoot" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ThirdSection
