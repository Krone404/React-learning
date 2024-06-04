function ListGroup() {
  let items = ["Newcastle", "Manchester", "Bournemouth", "Poole", "Sunderland"];

  items = [];

  const getMessage = () => {
    return items.length === 0 && <p>No iten found</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
