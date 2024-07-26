import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      alert('Login successful');
      navigate('/homepage');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
        <h2 className="form-title">Login</h2>
            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    required
                    />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                    required
                    />
            </div>
        <button type="submit">Login</button>
    </form>
);
}

export default function Login() {
    return (
      <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <LoginForm />
      </div>
    )
  }
