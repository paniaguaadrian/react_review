// React Components
import React from "react";

// Custom Components
import ExpenseForm from "./ExpenseForm";

// Styles
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
