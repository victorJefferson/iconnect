import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  const { profiles, loading } = useSelector((state) => state.profile);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>People</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i> Browse and Connect with
            people
          </p>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : (
            <h4>No Profiles found</h4>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profiles;
