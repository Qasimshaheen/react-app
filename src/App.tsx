import { useState } from "react";
import { Alert } from "./components/Alert";
import { Button } from "./components/button";

const handleClick = () => {
  console.log("clicked");
};
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Clicke Me!</Button>
    </div>
  );
}
export default App;
