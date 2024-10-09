import { Button } from "./components/button";
const handleClick = () => {
  console.log("button clicked");
};

function App() {
  return (
    <div>
      <Button onClick={handleClick}>Click Me!</Button>
    </div>
  );
}
export default App;
