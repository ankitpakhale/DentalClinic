import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div class="container-fluid bg-primary py-5 hero-header mb-5">
        <div class="row py-3">
          <div class="col-12 text-center">
            <h1 class="display-3 text-white animated zoomIn">About Us</h1>
            <Link to="/" class="h4 text-white">
              Home
            </Link>
            <i class="far fa-circle text-white px-2"></i>
            <Link to="/about" class="h4 text-white">
              About
            </Link>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-7">
              <div class="section-title mb-4">
                <h5 class="position-relative d-inline-block text-primary text-uppercase">
                  About Us
                </h5>
                <h1 class="display-5 mb-0">
                  The World's Best Dental Clinic That You Can Trust
                </h1>
              </div>
              <h4 class="text-body fst-italic mb-4">
                Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no
                lorem sit clita duo justo magna dolore
              </h4>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <div class="row g-3">
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <h5 class="mb-3">
                    <i class="fa fa-check-circle text-primary me-3"></i>Award
                    Winning
                  </h5>
                  <h5 class="mb-3">
                    <i class="fa fa-check-circle text-primary me-3"></i>
                    Professional Staff
                  </h5>
                </div>
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <h5 class="mb-3">
                    <i class="fa fa-check-circle text-primary me-3"></i>24/7
                    Opened
                  </h5>
                  <h5 class="mb-3">
                    <i class="fa fa-check-circle text-primary me-3"></i>Fair
                    Prices
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-lg-5" style={{ minHeight: "500px" }}>
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={require("../Assets/img/about.jpg")}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
