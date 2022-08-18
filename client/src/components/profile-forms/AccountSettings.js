import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editUser } from '../../actions/user';
import Spinner from '../layout/Spinner';

const AccountSettings = ({ history }) => {
  const [formData, setFormData] = useState({
    formName: '',
    formEmail: '',
  });

  const { formName, formEmail } = formData;

  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    setFormData({
      formName: loading || !user.name ? '' : user.name,
      formEmail: loading || !user.email ? '' : user.email,
    });
  }, [loading]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(formName, formEmail));
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Account Settings</h1>
      <p className='lead'>You can modify your user account here</p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='formName'
            value={formName}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Your Display name</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Email'
            name='formEmail'
            value={formEmail}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Your Email ID</small>
        </div>
        <button type='submit' className='btn btn-primary my-1'>
          Update
        </button>
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default AccountSettings;
