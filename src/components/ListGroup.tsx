import { ListGroupType } from "./types";

const ListGroup: React.FC<ListGroupType> = ({ items, onItemSelected }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item._id}
          onClick={() => onItemSelected(item)}
          className="list-group-item"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
