import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const path = () => {
    const user = localStorage.getItem('user');
    if (!user) {
      history.push('/login');
    }
  };

  useEffect(() => {
    path();
  });
  return (
    <div>home</div>
  );
}

export default Home;
