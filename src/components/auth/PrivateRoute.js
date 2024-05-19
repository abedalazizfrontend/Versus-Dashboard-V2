import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};
