import React from "react";
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Table = ({ headers, items }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  function formattedDate(date) {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  const StatusName = (status) => {
    switch (status) {
      case 0:
        return "Open";
      case 1:
        return "In Progress";
      case 2:
        return "Closed";
      default:
        return "Unknown";
    }
  };

  const PriorityName = (priority) => {
    switch (priority) {
      case 0:
        return "Low";
      case 1:
        return "Medium";
      case 2:
        return "High";
      default:
        return "Unknown";
    }
  };

  const renderBugList = (items) => {
    if (headers.length > 5) {
      return items.map((item, index) => (
        <tr key={index}>
          <td>{item.Title}</td>
          <td>{item.Description}</td>
          <td>{item.AffectedArea}</td>
          <td>{item.Assignee}</td>
          <td>{StatusName(item.Status)}</td>
          <td>{PriorityName(item.Priority)}</td>
          <td>{formattedDate(item.DateBugCreated)}</td>
          <td>{formattedDate(item.DateLastUpdated)}</td>
          <td>
            <Link
              to={`/editbug/${item.BugId}`}
              className="bg-warning w500 h-100 d-inline-block me-2"
            >
              <button type="button" className="btn btn-warning">
                Edit
              </button>
            </Link>
            <Link
              to={`/deletebug/${item.BugId}`}
              className="bg-danger w-50 h-100 d-inline-block"
            >
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </Link>
          </td>
        </tr>
      ));
    } else if (headers.length == 5) {
      return items.map((item, index) => (
        <tr key={index}>
          <td>{item.Title}</td>
          <td>{item.Description}</td>
          <td>{item.Assignee}</td>
          <td>{StatusName(item.Status)}</td>
          <td>{formattedDate(item.DateBugCreated)}</td>
          <td>
            <Link to={`/editbug/${item.BugId}`}>
              <MdEditDocument />
            </Link>
            <Link to={`/deletebug/${item.BugId}`}>
              <RiDeleteBin2Fill />
            </Link>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderBugList(items)}</tbody>
      </table>
    </div>
  );
};

export default Table;
