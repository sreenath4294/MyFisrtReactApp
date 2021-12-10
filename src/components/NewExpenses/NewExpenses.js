import React from "react";

import "../../styles/NewExpenses/NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (eneterdExpenseData) => {
    const expenseData = {
      ...eneterdExpenseData,
      id: Math.random().toString(),
    };
    console.log("expenseData: ", expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
