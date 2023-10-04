import React from 'react';
import { UserProvider, useUser } from './components/context/UserContext';
import AppRoutes from './components/Routing';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header/>
        <AppRoutes />
        <Footer/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
