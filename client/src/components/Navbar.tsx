import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import auth from '../utils/auth';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.loggedIn());
  const navigate = useNavigate();

  // Update login state when auth changes
  useEffect(() => {
    // Check auth status on mount
    setIsLoggedIn(auth.loggedIn());

    // Set up event listener for auth changes
    const checkAuth = () => setIsLoggedIn(auth.loggedIn());
    window.addEventListener('auth-change', checkAuth);

    return () => window.removeEventListener('auth-change', checkAuth);
  }, []);

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>{isLoggedIn ? 'Krazy Kanban Board' : 'Welcome'}</Link>
      </div>
      <ul>
        {!isLoggedIn ? (
          <li className='nav-item'>
            <Link to='/login' className='button'>
              Login
            </Link>
          </li>
        ) : (
          <>
            <li className='nav-item'>
              <Link to='/create' className='button'>
                New Ticket
              </Link>
            </li>
            <li className='nav-item'>
              <button 
                type='button' 
                onClick={handleLogout}
                className='button'
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;