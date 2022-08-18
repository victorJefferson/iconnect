import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const passRef = useRef();
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    passRef.current.type = showPassword ? 'text' : 'password';
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='container'>
      <div className='auth-form-inner'>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>Sign Into Your Account</p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <div className='d-custom-flex'>
              <input
                type='password'
                ref={passRef}
                className='auth-form pass-field'
                placeholder='Password'
                autoComplete='true'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                minLength='6'
              />
              {!showPassword && (
                <FontAwesomeIcon
                  className='clickable-eye'
                  onClick={handleShowPassword}
                  size='lg'
                  icon={faEye}
                />
              )}
              {showPassword && (
                <FontAwesomeIcon
                  className='clickable-eye'
                  onClick={handleShowPassword}
                  size='lg'
                  icon={faEyeSlash}
                />
              )}
            </div>
          </div>
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
