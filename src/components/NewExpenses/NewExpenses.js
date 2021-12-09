import React from "react";

import "../../styles/NewExpenses/NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpenses;
