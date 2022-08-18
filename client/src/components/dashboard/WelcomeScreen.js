import { useDispatch } from 'react-redux';
import { disableWelcomeScreen } from '../../actions/user';

const WelcomeScreen = ({ userName, history }) => {
  const dispatch = useDispatch();

  const handlegetStarted = () => {
    dispatch(disableWelcomeScreen());
    history.push('/create-profile');
  };

  return (
    <div className='empty-here'>
      <lottie-player
        src='https://assets6.lottiefiles.com/packages/lf20_1iycgljt.json'
        background='transparent'
        speed='1'
        loop
        style={{ width: '300px', height: '300px' }}
        autoplay
      ></lottie-player>
      <h1 className='text-primary'>
        <span>Hey {userName}, Welcome</span>
      </h1>
      <br />
      <button onClick={handlegetStarted} className='btn btn-dark btn-lg my-1'>
        Click here to Get Started
      </button>
    </div>
  );
};

export default WelcomeScreen;
