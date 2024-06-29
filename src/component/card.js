import React, { useState, useEffect } from 'react';
import './UserProfile.css';

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => {
        setUserData(data.results[0]);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div className="card">
      {userData && (
        <>
          <div className="avatar">
            <img src={userData.picture.large} alt="User Profile" />
          </div>
          <div className="details">
            <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Location: {`${userData.location.city}, ${userData.location.country}`}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default UserProfile;
