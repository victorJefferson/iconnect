import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const Navbar = ({ history }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout(history));
  };

  const guestLinks = (
    <ul>
      <li>
        <Link className='nav-link' to='/profiles'>
          People
        </Link>
      </li>
      <li>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </li>
      <li>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </li>
    </ul>
  );
  const authLinks = (
    <ul>
      <li>
        <Link className='nav-link' to='/profiles'>
          <i className='fas fa-users'></i>
          <span className='hide-sm'> People</span>
        </Link>
      </li>
      <li>
        <Link className='nav-link' to='/posts'>
          <i className='fas fa-sticky-note'></i>
          <span className='hide-sm'> Posts</span>
        </Link>
      </li>
      <li>
        <Link className='nav-link' to='/dashboard'>
          <i className='fas fa-address-card'></i>
          <span className='hide-sm'> Dashboard</span>
        </Link>
      </li>
      <li>
        <div className='dropdown'>
          <button className='clickable dropbtn'>
            <i className='fa fa-cog'></i>
            <span className='hide-sm'> Settings</span>
          </button>
          <div className='dropdown-content'>
            <Link className='dropdown-option' to='/account-settings'>
              Account Settings
            </Link>
            <Link className='dropdown-option' to='#'>
              Security Settings
            </Link>
            <Link to='#'>Customization</Link>
          </div>
        </div>
      </li>
      <li className='clickable'>
        <p onClick={logoutHandler}>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'> Logout</span>
        </p>
      </li>
    </ul>
  );
  return (
    <nav className='navbar dark'>
      <h2 className='logo'>
        <Link to='/'>
          <i className='fa fa-comment'></i> iConnect
        </Link>
      </h2>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

export default Navbar;
