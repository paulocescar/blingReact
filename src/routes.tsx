import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/authProvider';
import PrivateRoute from "./PrivateRoute"
import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;