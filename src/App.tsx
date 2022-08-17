import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { RadioGroup } from "./components/RadioGroup";

function App() {
  let items = ["Mercedes", "BMW", "Audi"];

  return (
    <>
      <Button disabled variant="outlined" size="big">
        Save
      </Button>
      <Button variant="text" size="small">
        Add
      </Button>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          let answers = [...e.target.cars]
            .filter((input) => input.checked)
            .map((answer) => answer.value);
          console.log(answers);
        }}
      >
        <CheckboxGroup items={items} name="cars" title="Choose your fav car" />
        <Button type="submit" size="small">
          SUBMIT
        </Button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let answers = [...e.target.cars]
            .filter((input) => input.checked)
            .map((answer) => answer.value);
          console.log(answers);
        }}
      >
        <RadioGroup items={items} name="cars" title="Choose your fav car" />
        <Button type="submit" size="small">
          SUBMIT
        </Button>
      </form>
    </>
  );
}

export default App;
