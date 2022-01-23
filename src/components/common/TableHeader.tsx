import { Component } from "react";
import { ColumnType, TableHeaderType } from "../types";

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

  handleSortIcon = (column: ColumnType) => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;

    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;

    return <i className="fa fa-sort-desc"></i>;
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
              {column.label} {this.handleSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
