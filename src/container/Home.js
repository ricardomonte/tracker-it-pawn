import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const Home = ({ authUser }) => {
  if (Object.entries(authUser).length > 0) {
    return <Profile />;
  }
  return (
    <>
      <div>
        <Link to="/sign_up">
          Sign Up
        </Link>
        <Link to="/sign_in">
          Sign In
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.authenticatedUser,
});

Home.propTypes = {
  authUser: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Home);
