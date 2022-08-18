import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/profile';
import profile from '../../assets/images/profile.png';
import editProfile from '../../assets/images/edit-profile.png';
import addExperience from '../../assets/images/add-experience.png';
import addEducation from '../../assets/images/add-education.png';
import deleteAccountIcon from '../../assets/images/delete-account.png';

const DashboardActions = () => {
  const userId = useSelector((state) => state.profile.profile.user._id);
  const dispatch = useDispatch();

  return (
    <div className='dash-buttons-group'>
      <div className='btn btn-border'>
        <Link className='d-flex align-items-center' to={`/profile/${userId}`}>
          <img src={profile} alt='profile' className='dashboard-button' />
          <span className='text-primary hide-md'>
            <strong>View Profile</strong>
          </span>
        </Link>
      </div>
      <div className='btn btn-border'>
        <Link className='d-flex align-items-center' to='/edit-profile'>
          <img
            src={editProfile}
            alt='edit-profile'
            className='dashboard-button'
          />
          <span className='text-primary hide-md'>
            <strong>Edit Profile</strong>
          </span>
        </Link>
      </div>
      <div className='btn btn-border'>
        <Link className='d-flex align-items-center' to='/add-experience'>
          <img
            src={addExperience}
            alt='add-experience'
            className='dashboard-button'
          />
          <span className='text-primary hide-md'>
            <strong>Add Experience</strong>
          </span>
        </Link>
      </div>
      <div className=' btn btn-border'>
        <Link className='d-flex align-items-center' to='/add-education'>
          <img
            src={addEducation}
            alt='add-education'
            className='dashboard-button'
          />
          <span className='text-primary hide-md'>
            <strong>Add Eductaion</strong>
          </span>
        </Link>
      </div>
      <div className='btn btn-red btn-border-delete'>
        <div
          className='d-flex align-items-center'
          onClick={() => {
            dispatch(deleteAccount());
          }}
        >
          <img
            src={deleteAccountIcon}
            alt='delete-account'
            className='dashboard-button'
          />
          <span className='text-light hide-md'>
            <strong>Delete Account</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardActions;
