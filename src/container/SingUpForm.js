import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signUpUser } from '../actions/logginActions';
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

const SingUpForm = ({ authUser, messageSuccess }) => {
  const [user, setUser] = useState({
    name: '',
    lastname: '',
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
    if (user.name === '' || user.lastname === '' || user.email === '' || user.password === '') {
      setInvalidform(true);
      return;
    }
    authUser(user);
  };

  const handleSpan = () => {
    setInvalidform(false);
  };

  return (
    <div className={TrackerStyle.containerTotal}>
      <form className={TrackerStyle.container}>
        <label htmlFor="name" className={TrackerStyle.label}>
          name:
          <input className={TrackerStyle.inputs} id="name" type="text" value={user.name} name="name" onChange={handleChange} placeholder="your name" />
        </label>
        <label htmlFor="lastname" className={TrackerStyle.label}>
          lastname:
          <input className={TrackerStyle.inputs} id="lastname" type="text" value={user.lastname} name="lastname" onChange={handleChange} placeholder="your lastname" />
        </label>
        <label htmlFor="email" className={TrackerStyle.label}>
          email:
          <input className={TrackerStyle.inputs} id="email" type="email" value={user.email} name="email" onChange={handleChange} placeholder="your email" />
        </label>
        <label htmlFor="password" className={TrackerStyle.label}>
          password:
          <input className={TrackerStyle.inputs} id="password" type="password" value={user.password} name="password" onChange={handleChange} placeholder="your name" />
        </label>
        <button type="button" onClick={handleValidation} className={TrackerStyle.btn}>Submit</button>
      </form>
      {
      invalidForm
        ? (
          <div
            onMouseOver={handleSpan}
            onFocus={handleSpan}
            className={TrackerStyle.invalid}
          >
            invalid form, try again.
          </div>
        )
        : <div />
      }
    </div>
  );
};

const mapDispatchToProps = (distpach) => ({
  authUser: (user) => distpach(signUpUser(user)),
});

const mapStateToProps = (state) => ({
  messageSuccess: state.createdReducer,
});

SingUpForm.propTypes = {
  authUser: PropTypes.func.isRequired,
  messageSuccess: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUpForm);
