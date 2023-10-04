import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginAndSignUp from './LoginAndSignUp';
import Header from './Header';
import BarChart from './Dashboard/dashmain';
import { useUser } from './context/UserContext';
import Project from './pages/Project';
import ProjectCreate from './pages/ProjectCreate';
import ProjectView from './pages/ProjectView';
import ProjectEnvironment from './pages/ProjectEnvironment';
import DrawingCanvas from './Drawing';
import MusicComposing from './MusicComposing';
import WritingPad from './WrittingPad';
import Aboutus from './Aboutus'; // Import the About Us component
import FaqPopup from './FaqPopup';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import AssetsPage from './AssetsPage';
import YourWorks from './YourWorks';
import UploadPage from './UploadPage'
import FollowersPage from './FollowersPage';
import Home from './Home';
import Footer from './Footer';
import '../assets/css/App.css'

const PrivateRoute=({children})=>{
    const {isUserLoggedin}=useUser();
    return isUserLoggedin ? children : <Navigate to="/" replace/>;
  }
  


const AppRoutes = () => {
  return (
    <div className="app-container">
            <Routes>
                <Route exact path="/" element={<LoginAndSignUp/>} />
                <Route path="/header" element={
                  <PrivateRoute>
                     <Header/>
                    </PrivateRoute>
                } />
               <Route path="/BarChart" element={<BarChart/>} />
               <Route path="/project" element={<Project/>} />
               <Route path="/projectC" element={<ProjectCreate/>} />
               <Route path="/projectV" element={<ProjectView/>} />
               <Route path="/environment/:projectId" element={<ProjectEnvironment/>} />
               <Route path="/Drawing" element={<DrawingCanvas/>} />
               <Route path="/Music" element={<MusicComposing/>} />
               <Route path="/write" element={<WritingPad/>} />
               <Route path="/about-us" element={<Aboutus />} /> {/* Route for the About Us page */}
        <Route path="/faq" element={<FaqPopup />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/your-works" element={<YourWorks />} />
        <Route path="/Homepage" element={<Home />} />
        <Route path="/uploadpage" element={<UploadPage />} />
        <Route path="/followers" element={<FollowersPage />} />
        <Route path="/footer" element={<Footer />} />
            </Routes>
      </div>
  );
};

export default AppRoutes;
