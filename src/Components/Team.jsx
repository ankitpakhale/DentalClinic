import React from "react";
import { Link } from "react-router-dom";
import TeamBox from "../Containers/TeamBox";
const Team = () => {
  return (
    <>
      <div class="container-fluid bg-primary py-5 hero-header mb-5">
        <div class="row py-3">
          <div class="col-12 text-center">
            <h1 class="display-3 text-white animated zoomIn">Dentist</h1>
            <Link to="/" class="h4 text-white">
              Home
            </Link>
            <i class="far fa-circle text-white px-2"></i>
            <Link to="/team" class="h4 text-white">
              Dentist
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
              <div className="section-title bg-light rounded h-100 p-5">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  Our Dentist
                </h5>
                <h1 className="display-6 mb-4">
                  Meet Our Certified & Experienced Dentist
                </h1>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <TeamBox
                name={"Dr. John Doe"}
                img={require("../Assets/img/team-1.jpg")}
                designation={"Implant Surgeon"}
              />
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <TeamBox
                name={"Dr. John Doe"}
                img={require("../Assets/img/team-2.jpg")}
                designation={"Implant Surgeon"}
              />
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <TeamBox
                name={"Dr. John Doe"}
                img={require("../Assets/img/team-3.jpg")}
                designation={"Implant Surgeon"}
              />
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <TeamBox
                name={"Dr. John Doe"}
                img={require("../Assets/img/team-4.jpg")}
                designation={"Implant Surgeon"}
              />
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <TeamBox
                name={"Dr. John Doe"}
                img={require("../Assets/img/team-5.jpg")}
                designation={"Implant Surgeon"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
