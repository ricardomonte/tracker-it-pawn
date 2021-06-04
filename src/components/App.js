import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkTokenUser } from '../actions/logginActions';
import Home from '../container/Home';
import SignUpForm from '../container/SignUpForm';
import SignInForm from '../container/SignInForm';
import Profile from '../container/Profile';
import ExpenseForm from '../container/ExpenseForm';
import DogForm from '../container/DogForm';
import HourPlayForm from '../container/PlayHour';
import OneDog from '../container/OneDog';
import Header from '../common/Header';

function App({ userToken }) {
  useEffect(() => {
    userToken();
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign_up" component={SignUpForm} />
        <Route exact path="/sign_in" component={SignInForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/create_expense" component={ExpenseForm} />
        <Route exact path="/add_dog" component={DogForm} />
        <Route exact path="/create_hour" component={HourPlayForm} />
        <Route exact path="/dog/:id" component={OneDog} />
      </Switch>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  userToken: () => dispatch(checkTokenUser()),
});

App.propTypes = {
  userToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
