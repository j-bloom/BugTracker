import React from "react";

const Table = ({ headers, items }) => {
  function formattedDate(date) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* TODO: GET data from DB and loop through to fill all columns */}
          {items.map((item) => (
            <tr>
              <td>{item.Title}</td>
              <td>{item.Description}</td>
              <td>{item.AffectedArea}</td>
              <td>{item.Assignee}</td>
              <td>{item.Status}</td>
              <td>{item.Priority}</td>
              <td>{formattedDate(item.DateBugCreated)}</td>
              <td>{formattedDate(item.DateLastUpdated)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
