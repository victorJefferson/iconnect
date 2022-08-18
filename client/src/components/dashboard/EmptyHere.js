import { Link } from 'react-router-dom';
import empty from '../../assets/images/empty.gif';

const EmptyHere = () => {
  return (
    <div className='empty-here'>
      <h1 className='text-primary'>
        <i className='fas fa-exclamation-triangle'></i>
        <br></br>
        <span>It's empty here</span>
      </h1>
      <img src={empty} alt='scooter' className='empty-image' />
      <br />

      <Link to='/create-profile' className='btn btn-dark my-1'>
        Create a Profile
      </Link>
    </div>
  );
};

export default EmptyHere;
