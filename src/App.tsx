import { useState } from "react";
import { ExpenseList } from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "production 1", amount: 10, category: "Utilities" },
    { id: 2, description: "production 2", amount: 30, category: "Utilities" },
    { id: 3, description: "production 3", amount: 50, category: "Utilities" },
    { id: 4, description: "production 4", amount: 60, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => handleDelete(id)} />
    </div>
  );
}
export default App;
