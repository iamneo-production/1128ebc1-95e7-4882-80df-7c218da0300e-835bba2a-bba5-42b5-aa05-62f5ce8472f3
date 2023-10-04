import React, { useState } from 'react';
import '../assets/css/Header.css';
import Sidebar from './SideBar';
import Hamburger from 'hamburger-react';
import UserContainer from './UserContainer';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="headerStyles">
      <div className="hamburgerWrapper" onClick={() => setOpen(!isOpen)}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <h1 className="headingStyles">ARTNEST</h1>
      <UserContainer />
      <Sidebar isOpen={isOpen} />
    </header>
  );
};

export default Header;
