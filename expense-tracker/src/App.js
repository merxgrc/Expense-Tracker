import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
import NewIncomeForm from './newIncome';
import NewExpenseForm from './newExpense';

function App() {
  const [incomes, setIncomes] = useState(JSON.parse(localStorage.getItem('incomes')) || []);
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || []);

  const addIncome = (income) => {
    const newIncomes = [...incomes, income];
    setIncomes(newIncomes);
    localStorage.setItem('incomes', JSON.stringify(newIncomes));
  };

  const addExpense = (expense) => {
    const newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage incomes={incomes} expenses={expenses} />} />
        <Route path="/newIncome" element={<NewIncomeForm addIncome={addIncome} />} />
        <Route path="/newExpense" element={<NewExpenseForm addExpense={addExpense} />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
