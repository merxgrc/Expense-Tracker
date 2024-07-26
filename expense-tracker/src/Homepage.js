import React, { useEffect, useState } from 'react';
import "./Homepage.css"

const comingsoon = {
    imageUrl: 'https://media1.tenor.com/m/Y3Q-JG_JE1YAAAAC/cat-driving-serious.gif',
    imageSize: 250
}

function Homepage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h2>Hello {user.name}</h2>
      <h3>This page will be coming soon!</h3>
      <img src={comingsoon.imageUrl}></img>
      <div className='finance'>
        <div className='income'>
            <div className='innerIncome'>
                <button className='incb' type='submit'>+ Create new income</button>
            </div>
        </div>
        <div className='expense'>
            <div className='innerExpense'>
                <button className='expb' type='submit'>+ Create new expense</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
