import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import collab from '../../assets/images/collab.gif';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='large'>
            Connecting with your peers has never been this easy
          </h1>
          <img src={collab} alt='collab' className='landing-image' />
          <p className='lead'>
            Create your profile/portfolio, share posts and collaborate with
            others in your organization
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary btn-lg'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-success btn-lg'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
