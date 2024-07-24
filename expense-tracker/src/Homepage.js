import React, { useEffect, useState } from 'react';

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
    <div>
      <h2>Hello {user.name}</h2>
      <h3>This page will be coming soon!</h3>
      <img src={comingsoon.imageUrl}></img>
      <div>
        <div>
            <h3>Income:</h3>
        </div>
        <div>
            <h3>Expenses:</h3>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
