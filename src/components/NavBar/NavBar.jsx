// src/components/NavBar/NavBar.jsx

import { Link } from 'react-router';
import { useContext } from 'react'

import { UserContext } from '../../context/UserContext';

const NavBar = () => {

  const {user, setUser } = useContext(UserContext)

  const handleSignOut = () => {
    localStorage.removeItem('token')
    setUser(null);
  }
  return (
    <nav>
      {user ? (
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
        ):(
        <ul>
          <li><Link to='/sign-up'>Sign Up</Link></li>
          <li><Link to='/sign-in'>Sign In</Link></li>
        </ul>
        )}
    </nav>
  );
};

export default NavBar;
