import React from "react";
import { Link } from "react-router-dom";
import ResentAppointmentTableData from "../Containers/ResentAppointmentTableData";
const ResentAppointment = () => {
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Resent Appointment
            </h1>
            <Link to="/" className="h4 text-white">
              Home
            </Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link to="/resentappointment" className="h4 text-white">
              Resent Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Docter Name</th>
              <th scope="col">Resion</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <ResentAppointmentTableData />
            </tr>
            <tr>
              <ResentAppointmentTableData />
            </tr>
            <tr>
              <ResentAppointmentTableData />
            </tr>
            <tr>
              <ResentAppointmentTableData />
            </tr>
            <tr>
              <ResentAppointmentTableData />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ResentAppointment;
