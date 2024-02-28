import React from "react";
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
      </div>
    </div>
  );
};

export default Home;
