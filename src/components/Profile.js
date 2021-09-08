import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/Profile.css';
import Image from 'react-bootstrap/Image';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading){
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <div id="profileDiv">
        <Image src={user.picture} alt={user.name} roundedCircle />
        <h2 id="userProfileName">{user.name}</h2>
        <p id="userEmail">{user.email}</p>
      </div>
    )
  );
};


export default Profile;
