import axios from 'axios';
import { setAlert } from './alert';
import { loadUser } from './auth';
import { EDIT_USER, EDIT_USER_FAIL, WELCOME_USER } from './types';

// Edit User
export const editUser = (name, email) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email });

  try {
    const res = await axios.post('/api/users/edit', body, config);
    dispatch({
      type: EDIT_USER,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert('Your account is modified', 'success'));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: EDIT_USER_FAIL,
    });
  }
};

// Disable welcome screen
export const disableWelcomeScreen =
  (showWelcomeScreen = false) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const body = JSON.stringify({ showWelcomeScreen });

    try {
      const res = await axios.post('/api/users/userNotNew', body, config);
      dispatch({
        type: WELCOME_USER,
        payload: res.data,
      });
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      dispatch({
        type: EDIT_USER_FAIL,
      });
    }
  };
