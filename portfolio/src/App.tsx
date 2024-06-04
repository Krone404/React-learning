import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Newcastle", "Manchester", "Bournemouth", "Poole", "Sunderland"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
