import React from 'react';

function FifthSection() {
  return (
    <div>
       {/* Fifth-section */}
       <section className="fifth-section">
        <div className="container-fluid">
          <iframe className="video" src="https://www.youtube.com/embed/044gqQ3eH3U" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <div className="fifth-sec-text">
            <h4 className="fw-bold">Being unique is the preference</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FifthSection
