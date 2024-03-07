import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item- m-1">
          <Link className="btn btn-light btn-outline-primary" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item- m-1">
          <Link className="btn btn-light btn-outline-primary" to="/createbug">
            Create Bug
          </Link>
        </li>
        <li className="nav-item- m-1">
          <Link className="btn btn-light btn-outline-primary" to="/viewbugs">
            View All Bugs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
