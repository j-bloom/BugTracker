import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateUserJoined, setDateUserJoined] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    const data = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
      DateUserJoined: dateUserJoined,
    };

    if (password === confirmPassword) {
      console.log(firstName, lastName, email, password);
      axios
        .post("https://localhost:7266/api/User", data)
        .then(() => {
          setLoading(false);
          navigate("/login");
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        }, []);
    } else {
      setErrors("Passwords do not match");

      alert(errors);
    }
  }

  return (
    <div>
      <h1 className="mt-3 justify-content-center">Sign Up</h1>
      <div
        className="card position-absolute top-50 start-50 translate-middle"
        style={{ width: "50%" }}
      >
        <div className="card-body">
          <form onSubmit={handleSignup}>
            <div className="mb-6 mt-3">
              <label htmlFor="inputFirstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-3">
              <label htmlFor="inputLastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-3">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-3">
              <label htmlFor="inputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-3">
              <label htmlFor="inputPassword2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
