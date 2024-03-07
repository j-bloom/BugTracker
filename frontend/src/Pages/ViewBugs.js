import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Components/Table.js";

const ViewBugs = () => {
  const [Bug, setBug] = useState([]);
  const [loading, setLoading] = useState(true);

  const headers = [
    "Title",
    "Description",
    "Affected Area",
    "Assigned to",
    "Status",
    "Priority",
    "Date Created",
    "Last Modified",
    "Actions",
  ];

  useEffect(() => {
    setLoading(true);
    axios.get("https://localhost:7266/api/Bug").then((response) => {
      setBug(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>View Bugs</h1>
      <Table headers={headers} items={Bug} />
    </div>
  );
};

export default ViewBugs;
