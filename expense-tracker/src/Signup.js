// importing necesssary dependencies from React
import React, { useState } from 'react';
import './signup.css';

// Defining an object 'enticingcat' that holds the image URL and sie
const enticingcat = {
    imageUrl: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/db06e966-a36f-4104-b620-6cc3f498ab21/1a94ccd0-dbfb-4e54-9e2b-0446b574b94b.png',
    imageSize: 250,
  };
  
  // Defining the SignUpForm component:
  // useState is a React hook that lets you add state to functional components.
  // formData is the current state, and setFormData is the function to update it.
  function SignUpForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // handleChange is a function that updates formData when the input fieds change
    const handleChange = (e) => {
        // e is the event object, e.target is the element that triggered the event.
        const { name, value } = e.target;
        // Updating the formData state, spreading the existing data and setting the new value.
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      // handleSubmit is a function that handles the form submission
      const handleSubmit = (e) => {
        // Preventing the default form submission behavior which reloads the
        e.preventDefault();
        // For now, just loffing the formData to the console
        // Handle form submission, e.g., send data to server
        console.log('Form submitted:', formData);
      };
    
      // The return statement defines what the component renders
      return (
            <form onSubmit={handleSubmit} className='signup-form'>
                <h2 className="form-title">Sign Up</h2>
                    <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                            <input 
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            />
                    </div>
                    <div className='form-group'>
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
                    <div className='form-group'>
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
                <p className='form-footer'>Already have an account?</p>
            </form>
      );
    }

// Defining the Signup component which uses the SignUpForm and displays and image and heading.
  export default function Signup() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1>Welcome to Mewer's Finance Tracker Web App</h1>
        <img src={enticingcat.imageUrl} style={{width: enticingcat.imageSize+100, height: enticingcat.imageSize-30}}></img>
        <SignUpForm />
      </div>
    )
  }