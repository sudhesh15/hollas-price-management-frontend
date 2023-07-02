import React from 'react';
import img1 from '../../../src/images/home.jpg';
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <section id="home" className="d-flex align-items-center">

    <div classNameName="container">
      <div className="row gy-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h3>HOLLA'S PRICE PORTAL</h3>
          <div>
          <Link to="/getProductOnBrandAndCategory"><a href="" className="btn-get-started">GET STARTED</a></Link>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={img1} className="floating" alt=""/>
        </div>
      </div>
    </div>

  </section>
  )
}

export default HomePage