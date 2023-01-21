import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./contexts/authContext";

const PrivateRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
    let navigate = useNavigate();
    const { user } = useContext(AuthContext);
  
    useEffect(() => {
      if (!user) {
        navigate('/login')
      }
    }, [user, navigate]);
  
    return <>{user ? children : null}</>;
}

export default PrivateRoute