import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBug = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [affectedArea, setAffectedArea] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState();
  const [priority, setPriority] = useState();
  const [dateBugCreated, setDateBugCreate] = useState(new Date());

  const navigate = useNavigate();

  // cast status and priority to numbers, DB status and priority are "int's"
  const statusAsNumber = Number(status);
  const priorityAsNumber = Number(priority);

  function handleSaveBug(e) {
    e.preventDefault();

    const data = {
      Title: title,
      Description: description,
      AffectedArea: affectedArea,
      Assignee: assignee,
      Status: statusAsNumber,
      Priority: priorityAsNumber,
      DateBugCreated: dateBugCreated,
      DateLastUpdated: dateBugCreated,
    };

    setLoading(true);
    axios
      .post("https://localhost:7266/api/Bug", data)
      .then(() => {
        setLoading(false);
        navigate("/viewbugs");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  useEffect(() => {
    setLoading(true);
    axios.get("https://localhost:7266/api/User").then((response) => {
      setUser(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Create Bug</h1>
      <form onSubmit={handleSaveBug}>
        <div className="mb-3 mt-3">
          <label htmlFor="inputBugTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputBugTitle"
            value={title}
            //onChange={(e) => console.log(e.target.value)}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control mt-3"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            value={description}
            // onChange={(e) => console.log(e.target.value)}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea2">Description</label>
        </div>
        <div className="col-6 mt-3">
          <label htmlFor="inputAffectedArea" className="form-label">
            Affected Area
          </label>
          <select
            id="inputAffectedArea"
            className="form-select"
            value={affectedArea}
            // onChange={(e) => console.log(e.target.value)}
            onChange={(e) => setAffectedArea(e.target.value)}
          >
            <option></option>
            <option value="New Feature">New Feature</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Login">Login</option>
            <option value="Testing">Testing</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
        {/* Use API to get user names and dynamically populate Assignees list 
            with active users */}
        <div className="col-md-4 mt-3">
          <label htmlFor="inputAssignee" className="form-label">
            Assign to
          </label>
          <select
            id="inputAssignee"
            className="form-select"
            valuevalue={assignee}
            // onChange={(e) => console.log(e.target.value)}
            onChange={(e) => setAssignee(e.target.value)}
          >
            <option></option>
            {user.map((u) => (
              <option key={u.id}>
                {u.FirstName} {u.LastName}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mt-3">
          <label htmlFor="inputStatus" className="form-label">
            Status
          </label>
          <select
            id="inputStatus"
            className="form-select"
            value={status}
            // onChange={(e) => console.log(e.target.value)}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option></option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="col-md-4 mt-3">
          <label htmlFor="inputPriority" className="form-label">
            Priority
          </label>
          <select
            id="inputPriority"
            className="form-select"
            value={priority}
            // onChange={(e) => console.log(e.target.value)}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option></option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBug;
