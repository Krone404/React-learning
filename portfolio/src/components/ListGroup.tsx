import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Newcastle", "Manchester", "Bournemouth", "Poole", "Sunderland"];

  const getMessage = () => {
    return items.length === 0 && <p>No iten found</p>;
  };

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
