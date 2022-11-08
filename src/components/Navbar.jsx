import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <header>
        <nav className="navbar center navbar-expand-lg position-fixed">
          <div className="container nav-container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <ion-icon id="app-icon" name="logo-apple-appstore" />
            <a className="navbar-brand fw-bolder" href="#">
              Apps
              </a>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="ms-5 navbar-nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/services">SERVICES</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/features">FEATURES</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/price">PRICE</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold" to="/faq">FAQ</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">GENERIC</a></li>
                    <li><a className="dropdown-item" href="#">ELEMENTS</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">others</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
