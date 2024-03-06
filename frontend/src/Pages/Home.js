import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/homeImg.jpg";
import bee from "../Images/beeImg.jpg";

const Home = () => {
  return (
    <div>
      <h1 className="d-flex justify-content-center m-3">
        Welcome to Bug Bee Gone
      </h1>

      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <p>Keep track of your issues, and fix them FAST!</p>
            <img className="img-fluid" src={bee} alt="bee" />
          </div>
          <div className="col">
            <img className="img-fluid" src={logo} alt="Bug Bee Gone logo" />
          </div>
        </div>
        <Link to={"/login"}>
          <button className="btn btn-primary me-5">Login</button>
        </Link>
        <Link to={"/signup"}>
          <button className="btn btn-secondary">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
