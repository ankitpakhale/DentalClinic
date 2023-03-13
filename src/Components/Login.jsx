import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Login</h1>
            <Link to="/" className="h4 text-white">
              Home
            </Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link to="/login" className="h4 text-white">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div
        className="col-xl-4 col-lg-6 wow slideInUp me-auto ms-auto"
        data-wow-delay="0.3s"
      >
        <form>
          <div className="row g-3">
            <div className="col-12">
              <input
                type="email"
                className="form-control border-0 bg-light px-4"
                placeholder="Your Email"
                style={{ height: "55px" }}
              />
            </div>
            <div className="col-12">
              <input
                type="password"
                className="form-control border-0 bg-light px-4"
                placeholder="Your Password"
                style={{ height: "55px" }}
              />
            </div>
            <span>
              Don,t have an Account <Link to="/register"> Register Now</Link>
            </span>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
