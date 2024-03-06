import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Routes, Route } from "react-router-dom";
import CreateBug from "./CreateBug";
import ViewBugs from "./ViewBugs";
import EditBug from "./EditBug";
import DeleteBug from "./DeleteBug";
import Dashboard from "./Dashboard";

const Login = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get("https://localhost:7266/api/User").then((response) => {
      setUser(response.data);
      setLoading(false);
    });
  }, []);

  function handleLogin() {
    user.map(() => {
      for (let i = 0; i < user.length; i++) {
        if (user[i].Email === email && user[i].Password === password) {
          setSuccess(true);
          navigate("/dashboard");
          console.log("found user");
        }
      }
    });
  }

  return (
    <div>
      <h1 className="mt-3 justify-content-center">Login</h1>
      <div
        className="card position-absolute top-50 start-50 translate-middle"
        style={{ width: "50%" }}
      >
        <div className="card-body">
          <form onSubmit={handleLogin}>
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

            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
          </form>
        </div>
      </div>
      if(success){" "}
      {
        <Routes>
          <Route path="/createbug" element={<CreateBug />} />
          <Route path="/viewbugs" element={<ViewBugs />} />
          <Route path="/editbug/:id" element={<EditBug />} />
          <Route path="/deletebug/:id" element={<DeleteBug />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      }
    </div>
  );
};

export default Login;
