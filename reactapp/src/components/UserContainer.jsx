import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import '../assets/css/UserContainer.css'
import { Logout } from './Redux/UserSlice';
import { persistor } from './Redux/Store';

const UserContainer = () => {
  const nav = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const username = useSelector(state => state.user?.user?.username) || "Guest";
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());  // Dispatch the Logout action
    persistor.purge(); 
    setShowDropdown(false);
    nav('/');
  };

  const handleLogin = () => {
    setShowDropdown(false);
    nav('/');  // Adjust the route to your login route
  };
  const navigateToProfile = () => {
    setShowDropdown(false);
    nav('/profile');  // Adjust the route to your profile route
  };

  return (
    <div className="userContainerStyles" onClick={() => setShowDropdown(!showDropdown)}>
      <BsFillPersonFill className='icon' />
      {username}
      {showDropdown && (
        <div className="userDropdown">
          {username === "Guest" ? (
            <button onClick={handleLogin}>Login</button>
          ) : (
            <>
            <button onClick={navigateToProfile}>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserContainer;
