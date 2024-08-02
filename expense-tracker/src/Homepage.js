import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Homepage.css";

function HomepageForm({ incomes, expenses }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  const handleCreateIncome = () => {
    navigate('/newIncome');
  };

  const handleCreateExpense = () => {
    navigate('/newExpense');
  };

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <div className='topbar'>
          <h2>Hello {user.name}</h2>
        </div>
        <div className='HPImage'>
          <button className='LO' onClick={handleLogout}>Log out</button>
        </div>
      </div>
      <div className='list'>
        <div className='blueBox'>
          <div className='incomeList'>
            <h3>Incomes</h3>
            {incomes.map(income => (
              <div key={income.id}>
                Amount: ${income.amount} | Category: {income.category} | Date: {income.date}
              </div>
            ))}
          </div>
          <div className='expenseList'>
            <h3>Expenses</h3>
            {expenses.map(expense => (
              <div key={expense.id}>
                Amount: ${expense.amount} | Category: {expense.category} | Date: {expense.date}
              </div>
            ))}
          </div>
          <div className='total'>
            <h3>Total</h3>
            <div>Total Income: ${totalIncome}</div>
            <div>Total Expense: ${totalExpense}</div>
          </div>
        </div>
      </div>
      <div className='finance'>
        <div className='income'>
          <div className='innerIncome'>
            <button className='incb' onClick={handleCreateIncome}>+ Create new income</button>
          </div>
        </div>
        <div className='expense'>
          <div className='innerExpense'>
            <button className='expb' onClick={handleCreateExpense}>+ Create new expense</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Homepage({ incomes, expenses }) {
  return (
    <HomepageForm incomes={incomes} expenses={expenses} />
  );
}
