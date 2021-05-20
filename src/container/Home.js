import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import TrackerStyle from '../styles/Home.module.css';

const Home = ({ authUser }) => {
  if (Object.entries(authUser).length > 0) {
    return <Profile />;
  }
  return (
    <>
      <div className={TrackerStyle.container}>
        <div className={TrackerStyle.containerLink}>
          <Link to="/sign_up" className={TrackerStyle.link}>
            Sign Up
          </Link>
        </div>
        <div className={TrackerStyle.containerLink}>
          <Link to="/sign_in" className={TrackerStyle.link}>
            Sign In
          </Link>
        </div>
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
