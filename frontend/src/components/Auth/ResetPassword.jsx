import React, { useState } from 'react';
import { forgotPassword } from '../../api/authApi';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword({ email });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Send Reset Email</button>
    </form>
  );
};

export default ResetPassword;
