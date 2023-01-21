import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/authProvider';
import Home from './pages/home';
import Login from './pages/login';

const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;