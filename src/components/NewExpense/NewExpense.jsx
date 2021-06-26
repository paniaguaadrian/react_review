// React Components
import React, { useState } from "react";

// Custom Components
import ExpenseForm from "./ExpenseForm";

// Styles
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEdditing, setIsEdditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdditing(false);
  };

  const startEdditingHandler = () => {
    setIsEdditing(true);
  };

  const stopEdditingHandler = () => {
    setIsEdditing(false);
  };

  return (
    <div className="new-expense">
      {!isEdditing && (
        <button onClick={startEdditingHandler}>Add New Expense</button>
      )}
      {isEdditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
