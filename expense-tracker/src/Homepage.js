import React, { useEffect, useState } from 'react';

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
    </div>
  );
}

export default Homepage;
