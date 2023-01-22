import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AuthProvider from './contexts/authProvider';
import AuthContext from './contexts/authContext';
import PrivateRoute from './PrivateRoute';
import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Settings from './pages/settings';

const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
          <PrivateRoute>
            <Routes>
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/settings' element={<Settings/>} />
            </Routes>
          </PrivateRoute>
      </Router>
    </AuthProvider>
  );
}

export default AppRouter;