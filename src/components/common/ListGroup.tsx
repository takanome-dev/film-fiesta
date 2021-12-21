import { ListGroupType } from "../types";

const ListGroup: React.FC<ListGroupType> = ({
  items,
  onItemSelected,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item, i) => (
        <li
          key={i}
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
