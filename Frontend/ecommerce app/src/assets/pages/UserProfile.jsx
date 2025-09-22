import React, { useEffect, useState } from 'react';
import './UserProfile.css';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://your-api.com/api/users/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setUser(data);
        } else {
          setError(data.message || 'Failed to load user details.');
        }
      } catch (err) {
        setError('Network error. Please try again.',err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) return <div className="user-profile">Loading user details...</div>;
  if (error) return <div className="user-profile error">{error}</div>;

  return (
    <div className="user-profile">
      <div className="profile-card">
        <img
          src={user.avatar || 'https://via.placeholder.com/100'}
          alt="User Avatar"
          className="avatar"
        />
        <h2>{user.fullName}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone || 'Not provided'}</p>
        <p><strong>Address:</strong> {user.address || 'Not provided'}</p>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;