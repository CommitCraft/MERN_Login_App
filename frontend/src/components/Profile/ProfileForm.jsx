import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../../api/profileApi';

const ProfileForm = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile(token);
        setProfile(response.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile(profile, token);
      alert('Profile updated successfully!');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Profile</h2>
      <input name="name" placeholder="Name" value={profile.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={profile.email} onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );
};

export default ProfileForm;
