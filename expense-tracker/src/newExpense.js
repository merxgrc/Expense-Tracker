import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof addExpense === 'function') {
      addExpense({ id: Date.now(), amount: parseFloat(amount), category, date });
      navigate('/homepage');
    } else {
      console.error("addExpense is not a function");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Expense</h3>
      <label>
        Amount:
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
      </label>
      <label>
        Category:
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required 
        />
      </label>
      <label>
        Date:
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
}
