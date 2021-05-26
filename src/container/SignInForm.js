import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logginUser } from '../actions/logginActions';
import TrackerStyle from '../styles/Forms.module.css';

const useDidUpdate = (callback, deps) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};

const SignInForm = ({ userSignIn, messageSuccess }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();

  const redirect = () => {
    history.push('/profile');
  };

  useDidUpdate(() => {
    redirect();
  }, [messageSuccess]);

  const [invalidForm, setInvalidform] = useState(false);

  const handleChange = (event) => {
    const updateUser = { ...user, [event.target.name]: event.target.value };
    setUser(updateUser);
  };

  const handleValidation = () => {
    if (user.email === '' || user.password === '') {
      setInvalidform(true);
      return;
    }
    userSignIn(user);
  };

  const handleSpan = () => {
    setInvalidform(false);
  };

  return (
    <div className={TrackerStyle.containerTotal}>
      <form className={TrackerStyle.container}>
        <label htmlFor="email" className={TrackerStyle.label}>
          Email:
          <input className={TrackerStyle.inputs} id="email" type="email" value={user.email} name="email" onChange={handleChange} placeholder="Your email" />
        </label>
        <label htmlFor="password" className={TrackerStyle.label}>
          Password:
          <input className={TrackerStyle.inputs} id="password" type="password" value={user.password} name="password" onChange={handleChange} placeholder="Your password" />
        </label>
        <button onClick={handleValidation} className={TrackerStyle.btn} type="button">Submit</button>
      </form>
      {
      invalidForm
        ? (
          <div
            onMouseOver={handleSpan}
            onFocus={handleSpan}
            className={TrackerStyle.invalid}
          >
            invalid form
          </div>
        )
        : <div />
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  messageSuccess: state.createdReducer,
});

const mapDispatchToProps = (dispatch) => ({
  userSignIn: (user) => dispatch(logginUser(user)),
});

SignInForm.propTypes = {
  userSignIn: PropTypes.func.isRequired,
  messageSuccess: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
