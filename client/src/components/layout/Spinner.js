import React, { Fragment } from 'react';
import spinner from '../../assets/images/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '200px', display: 'block', margin: 'auto' }}
        alt='Loading...'
      />
    </Fragment>
  );
};

export default Spinner;
