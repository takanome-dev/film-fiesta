import React from "react";
import { Component } from "react";
import _ from "lodash";
//* Types
import { ColumnType, TableBodyType } from "../types";
import { MovieType } from "../../types/MovieType";

export default class TableBody extends Component<TableBodyType> {
  renderTableData = (item: MovieType, column: ColumnType) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path!);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column, i) => (
              <td key={i}>{this.renderTableData(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
