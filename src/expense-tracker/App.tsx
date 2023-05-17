import { BsFillCalendarFill } from "react-icons/bs";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "bootstrap/dist/css/bootstrap.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Cinema", amount: 20, category: "Entertainment" },
    { id: 2, description: "Electricity", amount: 200, category: "Utilities" },
    { id: 3, description: "Pasta and Rice", amount: 5, category: "Groceries" },
    {
      id: 4,
      description: "Breakfast Foods",
      amount: 10,
      category: "Groceries",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
