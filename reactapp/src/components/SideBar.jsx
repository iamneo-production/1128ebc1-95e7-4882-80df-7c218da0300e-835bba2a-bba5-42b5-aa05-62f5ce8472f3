import React from 'react';
import { FaImages, FaBriefcase, FaUsers, FaUserFriends, FaUpload, FaHome } from 'react-icons/fa'; 
import '../assets/css/SideBar.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
    const username = useSelector(state => state.user?.user?.username) || "Guest";
    const navigate = useNavigate();  // Using navigate from react-router-dom

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="username-display">
                Welcome, {username}!
            </div>
            <button className="sidebar-button" onClick={() => navigate('/Homepage')}>
                <FaHome className="option-icon" />
                Home
            </button>
            <button className="sidebar-button" onClick={() => navigate('/assets')}>
                <FaImages className="option-icon" />
                Exhibit
            </button>
            <button className="sidebar-button" onClick={() => navigate('/your-works')}>
                <FaBriefcase className="option-icon" />
                Display
            </button>
            <button className="sidebar-button" onClick={() => navigate('/project')}>
                <FaUsers className="option-icon" />
                Collaboration
            </button>
            <button className="sidebar-button" onClick={() => navigate('/uploadpage')}>
                <FaUpload className="option-icon" />
                Upload
            </button>
            <button className="sidebar-button" onClick={() => navigate('/followers')}>
                <FaUserFriends className="option-icon" />
                Followers
            </button>
        </div>
    );
};

export default Sidebar;
