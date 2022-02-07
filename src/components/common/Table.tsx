import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { TableType } from "../types";

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
