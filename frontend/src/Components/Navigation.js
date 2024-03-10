import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <Link className="btn btn-light btn-outline-primary" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item- m-1">
              <Link
                className="btn btn-light btn-outline-primary"
                to="/createbug"
              >
                Create Bug
              </Link>
            </li>
            <li className="nav-item- m-1">
              <Link
                className="btn btn-light btn-outline-primary"
                to="/viewbugs"
              >
                View All Bugs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
