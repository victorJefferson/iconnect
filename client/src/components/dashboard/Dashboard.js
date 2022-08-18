import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Education from './Education';
import EmptyHere from './EmptyHere';
import Experience from './Experience';
import WelcomeScreen from './WelcomeScreen';

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  const userLoading = useSelector((state) => state.auth.loading);
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch, userLoading]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {profile !== null ? (
        <Fragment>
          <h1 className='large text-primary'>Hey, {user && user.name}</h1>
          <br></br>
          <DashboardActions />
          <div className='dashboard-container'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <Experience experience={profile.experience} />
              </div>
              <div className='col-12 col-lg-6'>
                <Education education={profile.education} />
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {user?.showWelcomeScreen === false ? (
            <EmptyHere />
          ) : (
            <WelcomeScreen userName={user && user.name} history={history} />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
