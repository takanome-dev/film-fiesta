import React from "react";
import { ListGroupType } from "../types";

const ListGroup: React.FC<ListGroupType> = ({
  items,
  onItemSelected,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item._id}
          onClick={() => onItemSelected(item)}
          className={
            selectedItem.name === item.name
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
