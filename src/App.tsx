import { useState } from "react";
import { ExpenseList } from "./expense-tracker/components/ExpenseList";
import { ExpenseFilter } from "./expense-tracker/components/ExpenseFilter";
import { ExpenseForm } from "./expense-tracker/components/ExpenseForm";
export const categories = ["Utilities", "Groceries", "Entertainment"];
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "production 1", amount: 10, category: "Utilities" },
    { id: 2, description: "production 2", amount: 30, category: "Groceries" },
    { id: 3, description: "production 3", amount: 50, category: "Utilities" },
    { id: 4, description: "production 4", amount: 60, category: "Groceries" },
    { id: 5, description: "production 5", amount: 15, category: "Groceries" },
    {
      id: 6,
      description: "production 6",
      amount: 35,
      category: "Entertainment",
    },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => handleDelete(id)}
      />
    </div>
  );
}
export default App;
