import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [visabilty, setVisability] = useState(false)

  return (
    <div>
      {visabilty === true && <Alert onClick={() => setVisability(false)}>My alert</Alert>}
      <Button onClick={() => setVisability(true)}>Button</Button>
    </div>
  );
}

export default App;
