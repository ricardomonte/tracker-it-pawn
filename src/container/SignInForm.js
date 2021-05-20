import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logginUser } from '../actions/logginActions';

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

const SingInForm = ({ userSignIn, messageSuccess }) => {
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

  const handleValidation = (event) => {
    if (user.name === '' || user.lastname === '' || user.email === '' || user.password === '') {
      setInvalidform(true);
      return;
    }
    event.preventDefault();
    userSignIn(user);
  };

  const handleSpan = () => {
    setInvalidform(false);
  };

  return (
    <div>
      <form onSubmit={handleValidation}>
        <label htmlFor="email">
          email:
          <input id="email" type="email" value={user.email} name="email" onChange={handleChange} placeholder="your email" />
        </label>
        <label htmlFor="password">
          password:
          <input id="password" type="password" value={user.password} name="password" onChange={handleChange} placeholder="your name" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {
      invalidForm
        ? <div onMouseOver={handleSpan} onFocus={handleSpan}>invalid formw</div>
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

SingInForm.propTypes = {
  userSignIn: PropTypes.func.isRequired,
  messageSuccess: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingInForm);
