import React from "react";
import TableBody from "./TableBody";

function TableData({ headings, users, handleSort }) {
  return (
    <div className="tabledata mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <TableBody users={users} />
      </table>
    </div>
  );
}

export default TableData;
