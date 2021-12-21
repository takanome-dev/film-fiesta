import React from "react";
//* Types
import { TableType } from "../types";
//* Components
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table: React.FC<TableType> = ({
  columns,
  data,
  handleSort,
  sortColumn,
}) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
