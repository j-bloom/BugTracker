import React from "react";

const Table = ({ headers, items }) => {
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

  const renderBugList = (items) => {
    if (headers.length > 5) {
      return items.map((item, index) => (
        <tr key={index}>
          <td>{item.Title}</td>
          <td>{item.Description}</td>
          <td>{item.AffectedArea}</td>
          <td>{item.Assignee}</td>
          <td>{StatusName(item.Status)}</td>
          <td>{item.Priority}</td>
          <td>{formattedDate(item.DateBugCreated)}</td>
          <td>{formattedDate(item.DateLastUpdated)}</td>
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
