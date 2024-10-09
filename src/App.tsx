import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New Yourk", "San Francisco", "London", "Paris"];
  let colors = ["Red", "Green", "Blue", "Purple"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
