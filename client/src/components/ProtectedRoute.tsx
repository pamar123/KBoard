// client/src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import Auth from '../utils/auth';

const ProtectedRoute = () => {
  // If not logged in, redirect to login page
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;