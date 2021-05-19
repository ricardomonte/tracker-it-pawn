import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkTokenUser } from '../actions/logginActions';
import Home from '../container/Home';
import SignUpForm from '../container/SingUpForm';
import SignInForm from '../container/SignInForm';
import Profile from '../container/Profile';
import ExpenseForm from '../container/ExpenseForm';
import DogForm from '../container/DogForm';

function App({ userToken }) {
  useEffect(() => {
    userToken();
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_up" component={SignUpForm} />
      <Route exact path="/sign_in" component={SignInForm} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/create_expense" component={ExpenseForm} />
      <Route exact path="/add_dog" component={DogForm} />
    </Switch>
  );
}

const mapDispatchToProps = (dispatch) => ({
  userToken: () => dispatch(checkTokenUser()),
});

App.propTypes = {
  userToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
