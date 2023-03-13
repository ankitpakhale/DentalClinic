import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div class="container-fluid bg-primary py-5 hero-header mb-5">
        <div class="row py-3">
          <div class="col-12 text-center">
            <h1 class="display-3 text-white animated zoomIn">Register</h1>
            <Link to="/" class="h4 text-white">
              Home
            </Link>
            <i class="far fa-circle text-white px-2"></i>
            <Link to="/register" class="h4 text-white">
              Register
            </Link>
          </div>
        </div>
      </div>

      <div
        class="col-xl-4 col-lg-6 wow slideInUp me-auto ms-auto"
        data-wow-delay="0.3s"
      >
        <form>
          <div class="row g-3">
            <div class="col-12">
              <input
                type="text"
                class="form-control border-0 bg-light px-4"
                placeholder="Your Name"
                style={{ height: "55px" }}
              />
            </div>
            <div class="col-12">
              <input
                type="number"
                class="form-control border-0 bg-light px-4"
                placeholder="Your Contect Number"
                style={{ height: "55px" }}
              />
            </div>
            <div class="col-12">
              <input
                type="email"
                class="form-control border-0 bg-light px-4"
                placeholder="Your Email"
                style={{ height: "55px" }}
              />
            </div>
            <div class="col-12">
              <input
                type="password"
                class="form-control border-0 bg-light px-4"
                placeholder="Your Password"
                style={{ height: "55px" }}
              />
            </div>
            <div class="col-12">
              <label class="form-check-label" for="flexRadioDefault2">
                Gender{" "}
              </label>
              &emsp;&emsp;&emsp;
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Male{" "}
              </label>
              &emsp;&emsp;
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
            <div class="col-12">
              <textarea
                class="form-control border-0 bg-light px-4 py-3"
                rows="3"
                placeholder="Address"
              ></textarea>
            </div>
            <span>
              Already have an Account <Link to="/login"> Login Now</Link>
            </span>
            <div class="col-12">
              <button class="btn btn-primary w-100 py-3" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
