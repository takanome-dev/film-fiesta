import { Component } from "react";
//* Types
import { TableHeaderType } from "../types";

export default class TableHeader extends Component<TableHeaderType> {
  handleSort = (path: string) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    return this.props.handleSort(sortColumn);
  };

  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th
              key={i}
              onClick={() => this.handleSort(column.path!)}
              style={{ cursor: "pointer" }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
