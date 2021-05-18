import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logginUser } from '../actions/logginActions';

const SingInForm = ({ userSignIn }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (event) => {
    const updateUser = { ...user, [event.target.name]: event.target.value };
    setUser(updateUser);
  };

  const handleSubmite = (event) => {
    event.preventDefault();
    userSignIn(user);
    const removeUser = { ...user };
    removeUser.email = '';
    removeUser.password = '';
    setUser(removeUser);
    history.push('/profile');
  };

  return (
    <div>
      <p>here goes a sign in form</p>
      <form onSubmit={handleSubmite}>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userSignIn: (user) => dispatch(logginUser(user)),
});

SingInForm.propTypes = {
  userSignIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SingInForm);
