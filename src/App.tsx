import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button disabled variant="outlined" size="big">
        Save
      </Button>
      <Button variant="text" size="small">
        Add
      </Button>
    </>
  );
}

export default App;
