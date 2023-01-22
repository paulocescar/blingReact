import React, { useEffect ,useContext } from 'react';
import { useNavigate, Route, RouteProps } from 'react-router-dom';
import AuthContext from './contexts/authContext';
interface Props extends React.PropsWithChildren {}

const PrivateRoute: React.FC<RouteProps> = ({children}) => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext)
  
  return <>{!user ?
    navigate('/login') :children}</>
};

export default PrivateRoute;  