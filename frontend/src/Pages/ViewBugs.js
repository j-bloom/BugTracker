import React, { useEffect, useState } from "react";
import { variables } from "../API/config.js";
import axios from "axios";
import Table from "../Components/Table.js";

const headers = [
  "Title",
  "Description",
  "Affected Area",
  "Assigned to",
  "Status",
  "Priority",
  "Date Created",
  "Last Modified",
];

const ViewBugs = () => {
  const [Bug, setBug] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://localhost:7266/api/Bug").then((response) => {
      setBug(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Edit Bug</h1>
      <Table headers={headers} items={Bug} />
    </div>
  );
};

export default ViewBugs;
