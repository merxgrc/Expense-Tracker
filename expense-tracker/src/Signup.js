import React, { useState } from 'react';

const enticingcat = {
    imageUrl: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/db06e966-a36f-4104-b620-6cc3f498ab21/1a94ccd0-dbfb-4e54-9e2b-0446b574b94b.png',
    imageSize: 250,
  };
  
  function SignUpForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log('Form submitted:', formData);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      );
    }


  export default function Signup() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1>Welcome to Mewer's Finance Tracker Web App</h1>
        <img src={enticingcat.imageUrl} style={{width: enticingcat.imageSize+100, height: enticingcat.imageSize-30}}></img>
        <SignUpForm />
      </div>
    )
  }