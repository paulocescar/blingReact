import React, { ReactNode, useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import AuthProvider from './contexts/authProvider';
import AuthContext from './contexts/authContext';
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
            <Route path='/dashboard' element={<ProtectedRoute pageElement={<Dashboard />} />} />
            <Route path='/settings' element={<ProtectedRoute pageElement={<Settings />} />} />
          </Routes>
      </Router>
    </AuthProvider>
  );
}

//Rotas protegidas - necessÃ¡rio estar logado para acessar
interface protectedProps {
  pageElement: ReactNode
}
const ProtectedRoute = ({ pageElement }: protectedProps) => {
  const token = localStorage.getItem('token');
  if (!token) {
      return <Navigate to={'/login'} replace />
  }

  return <div>{pageElement}</div>
}
export default AppRouter;