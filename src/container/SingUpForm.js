import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signUpUser } from '../actions/logginActions';

const SingUpForm = ({ authUser }) => {
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });

  const history = useHistory();

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
    history.push('/profile');
  };

  const handleSpan = () => {
    setInvalidform(false);
  };

  return (
    <div>
      <p>here goes a sign in form</p>

      <form>
        <label htmlFor="name">
          name:
          <input id="name" type="text" value={user.name} name="name" onChange={handleChange} placeholder="your name" />
        </label>
        <label htmlFor="lastname">
          name:
          <input id="lastname" type="text" value={user.lastname} name="lastname" onChange={handleChange} placeholder="your lastname" />
        </label>
        <label htmlFor="email">
          email:
          <input id="email" type="email" value={user.email} name="email" onChange={handleChange} placeholder="your email" />
        </label>
        <label htmlFor="password">
          password:
          <input id="password" type="password" value={user.password} name="password" onChange={handleChange} placeholder="your name" />
        </label>
        <button type="button" onClick={handleValidation}>Submit</button>
      </form>
      {
      invalidForm
        ? <div onMouseOver={handleSpan} onFocus={handleSpan}>invalid formw</div>
        : <div />
      }
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   signUpError: state.manageErr,
// });

const mapDispatchToProps = (distpach) => ({
  authUser: (user) => distpach(signUpUser(user)),
});

// const mapStateToProps = (state) => ({
//   loggedUser: state.authenticatedUser,
// });

SingUpForm.propTypes = {
  authUser: PropTypes.func.isRequired,
  // loggedUser: PropTypes.instanceOf(Object).isRequired,
  // signUpError: PropTypes.instanceOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(SingUpForm);
