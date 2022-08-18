import { Fragment } from 'react';

const NotFound = ({ isPage = true }) => {
  return (
    <div className='container page-not-found'>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i>{' '}
        {isPage && (
          <div>
            <span>Page not Found</span>
            <p className='large'>Sorry this page does not exist</p>
          </div>
        )}
        {!isPage && (
          <div>
            <span>Profile not Found/Created</span>
            <p className='large'>Sorry Profile for this user does not exist</p>
          </div>
        )}
      </h1>
    </div>
  );
};

export default NotFound;
