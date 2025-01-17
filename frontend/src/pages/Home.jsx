import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div style={styles.container}>
      <h1>Welcome to MERN App</h1>
      <p>Your one-stop app for authentication and profile management.</p>
      {!isLoggedIn ? (
        <div>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/register" style={styles.button}>Register</Link>
        </div>
      ) : (
        <Link to="/profile" style={styles.button}>Go to Profile</Link>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  button: {
    margin: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#61dafb',
    color: '#000',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
  },
};

export default Home;
