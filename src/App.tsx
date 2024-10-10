import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheez"] });
  };
  return (
    <div>
      {pizza.toppings.map((t) => ` ${t}`)}
      <br />
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
export default App;
